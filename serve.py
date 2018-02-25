import hashlib

import flask

app = flask.Flask(__name__)

paths = [
    'base.html',
    'app.jsx',
    'react/react.js',
    'react/react-dom.js',
    'react/JSXTransformer.js',
    'icon.png',
]

def hash_string(s):
    hasher = hashlib.sha1()
    hasher.update(s.encode('utf-8'))
    return hasher.hexdigest()

@app.route('/cache.manifest')
def cache_manifest():
    # Create a cache manifest
    content = ''
    for p in paths:
        with open(p) as f:
            content += f.read()
    hash = hash_string(content)
    manifest = '#version %s\nCACHE MANIFEST\n%s' % (hash, '\n'.join(paths))
    return (manifest, {'content-type': 'text/cache-manifest'})

@app.route('/<path:p>')
def files(p):
    if p not in paths:
        return 'File Not Found', 404
    return flask.send_file(p)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
