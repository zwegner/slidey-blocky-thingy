var BOX_WIDTH = 55;

var PUZZLES = [
    {"moves": 11, "board": "...... .755AA 87++19 833219 BB62.9 ..6244"},
    {"moves": 11, "board": "....3. ..7738 ..++38 .6611. ...255 ...244"},
    {"moves": 11, "board": "....66 .99884 ..++.4 111..4 .27333 .27555"},
    {"moves": 11, "board": "...544 .775.. ++AB9. 66AB9. .88112 .33..2"},
    {"moves": 11, "board": "...777 33...A 84++BA 8422B. 6991B. 6CC155"},
    {"moves": 11, "board": "..4722 99475B 3++A5B 3..A.8 .11..8 ..66.."},
    {"moves": 11, "board": ".1664. 91.B4. 9++B.. 8.3577 8.35AA .225.."},
    {"moves": 11, "board": ".21188 .277.. .2++.A 5543.A 9.43.B 9.66.B"},
    {"moves": 11, "board": ".22... ..16A5 ++16A5 8.4.A. 894... 897733"},
    {"moves": 11, "board": ".72288 .733.B .7++.B 166CC9 1.5559 1AAA44"},
    {"moves": 11, "board": "3..88B 3DD.7B A5++7B A5..11 6499CC 64..22"},
    {"moves": 11, "board": "4..... 499555 4++6.. 2226.. 3311.8 ...778"},
    {"moves": 11, "board": "677733 6122DD 61++49 ..8.49 BB8.4A .CC55A"},
    {"moves": 11, "board": "A77766 A.9333 ++94.5 .224.5 .188.. .1..BB"},
    {"moves": 11, "board": "D777BB D.A333 81A++4 81A5.4 81.5C9 2266C9"},
    {"moves": 12, "board": "..21AA 332146 C8++46 C8999. 77.... BB555."},
    {"moves": 12, "board": "..94CC 2294A. 8++3A5 8773B5 ..DDB1 .66EE1"},
    {"moves": 12, "board": "..AABB ..11CC ++5.82 665.82 .97773 .944.3"},
    {"moves": 12, "board": "..B3CC 99B3.6 82++76 825571 AA...1 .444.1"},
    {"moves": 12, "board": "..CC77 999..A 5++41A 5..41B 23..1B 238866"},
    {"moves": 12, "board": ".1.772 .155.2 .++..2 8..344 8.6399 8.6AAA"},
    {"moves": 12, "board": ".74488 .799.6 B++2.6 B..2DD 51C233 51CAAA"},
    {"moves": 12, "board": ".89995 .822.5 ++B..7 AAB..7 3.4411 366..."},
    {"moves": 12, "board": "22255. 4...6. 4++A6. 119A.. ..9A88 .77733"},
    {"moves": 12, "board": "35DD99 356687 35++87 AB444. AB1.2. CC1.2."},
    {"moves": 12, "board": "666..4 333774 ++..94 81119. 8..2.. 8..255"},
    {"moves": 12, "board": "A55588 A66BB1 A2++91 .2.491 ...477 ...333"},
    {"moves": 12, "board": "AAA..B 77244B ++2.8B 511.8. 5C338. 5C6699"},
    {"moves": 13, "board": "..88A9 .22.A9 16++A9 16.577 C335.. C44BB."},
    {"moves": 13, "board": ".66557 22..97 ++.39. 4A.311 4ABBDD 488CCC"},
    {"moves": 13, "board": "8..999 8.3322 ++76.. ..76.. 44551A ....1A"},
    {"moves": 13, "board": "C9995D C.225D B++831 B66831 .7.EE1 .744AA"},
    {"moves": 14, "board": ".22... 4.DAA7 4.D++7 11D337 8699BB 8655CC"},
    {"moves": 14, "board": ".3..96 .34496 ++.2.. 7772.. 1..255 1..888"},
    {"moves": 14, "board": ".A77.B 5A333B 5++.8B 922.8. 9.6411 ..64.."},
    {"moves": 15, "board": ".....8 3..6.8 3++6.8 399744 .1.722 .155.."},
    {"moves": 15, "board": "114..B 63422B 63++75 998C75 AA8C.5 ..8CDD"},
    {"moves": 16, "board": ".55722 ...739 ..++39 668839 ..1AAA ..1.44"},
    {"moves": 16, "board": "22..58 .97758 .9++5A 3334.A C..466 C.BB11"},
    {"moves": 16, "board": "557BB8 .47668 D4++.8 DE..CC 1EAA33 122999"},
    {"moves": 16, "board": "618844 61..55 69++CB .922CB .9733D EE7AAD"},
    {"moves": 17, "board": "5..888 5AAA24 ++..24 116CC4 9.63BB 9773.."},
    {"moves": 18, "board": ".9966. EE288D ++241D 33341D C.BB77 CAAA55"},
    {"moves": 20, "board": ".9.366 .9.341 8B++41 8B554. ..C777 AAC.22"},
    {"moves": 21, "board": "992254 ...854 1++8.4 1.A666 ..A.7. .3337."},
    {"moves": 22, "board": "777.A3 ....A3 ++84.3 9984.. 511666 5..222"},
    {"moves": 22, "board": "777.A3 ....A3 ++84.3 9984.. 511666 5..222"},
    {"moves": 18, "board": "388899 366..7 3++..7 2211.7 .B..55 .BAA44"},
    {"moves": 20, "board": ".1.66. .1.992 .1++42 77.542 A..588 A..333"},
    {"moves": 17, "board": "...811 33.827 ++..27 BBBAA7 599666 5...44"},
    {"moves": 17, "board": "...1BB .661.. .3++9. .34298 .342A8 7755A8"},
    {"moves": 21, "board": "77944. ..9655 ++96.2 .111.2 ....33 .888.."},
    {"moves": 19, "board": "55886B .99.6B ++E16. D2E177 D2CCAA .4433."},
    {"moves": 16, "board": ".AA.11 442..3 862++3 865573 869C7. ..9CBB"},
    {"moves": 20, "board": "..6744 ..6733 .++7.. 889925 ..AA25 .11BB."},
    {"moves": 16, "board": "AA366. .43888 54++92 541192 7...9B 7....B"},
    {"moves": 20, "board": ".5.111 25.883 25.++3 .66673 44A.7. ..A999"},
    {"moves": 19, "board": "CC5558 BB9.48 ++9.47 ..3667 ..32AA .112.."},
    {"moves": 21, "board": "4AAA.. 4..255 7++2.. 7166.9 B1.889 B33..9"},
    {"moves": 23, "board": "...155 .A.122 .A++84 .66684 ..3774 ..399."},
    {"moves": 16, "board": "44113A .5593A .++93. ..8677 ..8622 ......"},
    {"moves": 16, "board": "..6663 9944.3 ++2..5 A.27.5 A187.5 .187BB"},
    {"moves": 16, "board": "2AA4.. 2.14.6 ++1..6 591333 59778. .BB.8."},
    {"moves": 16, "board": "..422. 8841B. A++1B. A77199 66CC.D .5533D"},
    {"moves": 18, "board": "99BB75 C11175 C8.++5 D8.33. D4AA22 .466EE"},
    {"moves": 18, "board": "..59BB 2259.1 ++5..1 .488AA .43336 .777.6"},
    {"moves": 16, "board": "..6664 ..3BB4 ++3.C8 755.C8 7AA118 ..2299"},
    {"moves": 16, "board": "..1... ..16.. ++7689 2.7389 24438. ..555."},
    {"moves": 16, "board": "155589 122.89 .B.++6 .B.4A6 .3.4A6 .3.477"},
    {"moves": 19, "board": "CC555A 77BB1A .++.1D 336..D 8.622D 844999"},
    {"moves": 18, "board": "...AA. 98BB5. 98++5. 67225. 67.411 .334.."},
    {"moves": 20, "board": ".7CC.A .7222A ++.438 99.438 1.6555 1.6BBB"},
    {"moves": 18, "board": "3..55. 3BBAA4 ++1..4 881.6C .7226C .7999C"},
    {"moves": 16, "board": "..55BB ..9928 ..++28 .44AA8 ...611 77.633"},
    {"moves": 16, "board": "AA8.99 338.64 B.++64 BCC224 DDD1.. 77.155"},
    {"moves": 21, "board": "52BBCC 5288A. 4++DA. 4.6D77 ..6339 ..11.9"},
    {"moves": 16, "board": "44AA.. 33995. ++.157 B661.7 B.2887 CC2..."},
    {"moves": 16, "board": "1222BB 1.3CC. ++34.. .88477 ..AAA9 6655.9"},
    {"moves": 16, "board": "..1333 771.48 .++.48 995558 ..222. ..66AA"},
    {"moves": 18, "board": "7.44.. 755311 ++C3.9 B.CAA9 B.22.6 888..6"},
    {"moves": 19, "board": "6C..AA 6C7778 ++4.28 ..412B 95D1.B 95D133"},
    {"moves": 18, "board": "BCC453 B.8453 ++8..3 .61122 .6AA7. .99.7."},
    {"moves": 20, "board": "....11 A..844 A++8.. A2.8BB .23396 775596"},
    {"moves": 18, "board": "....33 5..266 5++2.. 87.211 87.BB9 .AA449"},
    {"moves": 17, "board": ".55523 ..4.23 ++4.21 .....1 .79991 .76688"},
    {"moves": 16, "board": "A7766. AB3335 .B++95 118.92 D.8CC2 D.4442"},
    {"moves": 18, "board": "55111C 88444C 7A++32 7AB.32 ..B.66 ....99"},
    {"moves": 19, "board": "667111 997.AA .8++.5 .84445 .BB3.5 .223CC"},
    {"moves": 17, "board": "66611. A44459 A.++59 288359 2..3BB 7773.."},
    {"moves": 18, "board": ".22217 .49917 B4.++7 B33355 ...866 ...8AA"},
    {"moves": 17, "board": "2..... 24448A ++6.8A ..655A 336799 1117.."},
    {"moves": 17, "board": "2..... 27711. ++63.. ..63.8 4443.8 .555.."},
    {"moves": 19, "board": "114... B54.9A B5++9A 86.33A 86.722 .6.7.."},
    {"moves": 21, "board": "55.B2A 1..B2A 13++2. .34... 934.77 98866."},
    {"moves": 16, "board": "224A.. ..4ABB 3++.7. 31557. .1.699 .886.."},
    {"moves": 16, "board": "B55AA. B1118. ++C28. 33C299 .44667 .....7"},
    {"moves": 25, "board": ".4475B ...75B .A++5. .A1C33 8.1C66 82299."},
    {"moves": 28, "board": "..BB8. 222785 .++715 43371C 4.6AAC ..6999"},
    {"moves": 23, "board": "..2888 772.1. 9++.1. 9.3655 ..36.. 4446.."},
    {"moves": 23, "board": ".9AA66 .92277 ++8..C BB84.C 3114.5 3.DD.5"},
    {"moves": 23, "board": "9.774. 9.6.4A ++61.A 3331.B 88855B ..222."},
    {"moves": 21, "board": ".5BB22 753331 75++.1 7448.1 ..6899 AA6..."},
    {"moves": 27, "board": "BAA7.. B.C766 .1C++D .1.99D 333.84 552284"},
    {"moves": 22, "board": ".AA5.. .C.544 9C++17 922.17 3DD.18 366BB8"},
    {"moves": 21, "board": "8BBBAA 8722.6 .7++.6 .11556 ...933 .449.."},
    {"moves": 22, "board": ".77B.. .5.B88 95++16 944.16 A33.1D ACC22D"},
    {"moves": 21, "board": ".3...B .3444B ++9.A5 1192A5 7.8266 7.8..."},
    {"moves": 23, "board": ".88..6 .33326 1++.2A 1...2A 1.4555 774.99"},
    {"moves": 21, "board": "..9.33 ..9222 .++1.. .AA177 555668 .BB448"},
    {"moves": 23, "board": ".BAA55 .B22CE ++4.CE 664338 7DD1.8 7991.."},
    {"moves": 26, "board": ".CC66. ..4779 ++4..9 5.4AA2 5BB1.2 .33188"},
    {"moves": 23, "board": "....AA 444556 ++7..6 8.7139 822139 ......"},
    {"moves": 21, "board": "66B993 C.B443 C++2.. 77.2AA 55888. 111..."},
    {"moves": 25, "board": "..AA77 1..299 1++2.5 .666.5 883..5 ..3444"},
    {"moves": 21, "board": "..3.44 ..3888 9++6.. 91A622 91A557 .1...7"},
    {"moves": 22, "board": "..B466 7.B481 7.++81 7...55 22AAA3 999..3"},
    {"moves": 24, "board": "A.B.CC A.B677 ++461D 334.1D .85559 .822.9"},
    {"moves": 21, "board": "6663.A 1..38A 1.++85 7.9985 7.2..5 7.2444"},
    {"moves": 21, "board": "....77 44555B A.++8B A33182 A.9182 ..9166"},
    {"moves": 22, "board": "..CDAA 44CD96 7.++96 7.5511 222EE3 BBB883"},
    {"moves": 21, "board": "2....8 2337C8 ++57CA 115..A .9BBDD .94466"},
    {"moves": 21, "board": ".882.. .3.255 .3.++6 944.B6 9CCCBA .1177A"},
    {"moves": 22, "board": ".3.55. A3.BB9 A3++29 .11429 ...477 .8866."},
    {"moves": 21, "board": ".4.775 .4...5 1++2.6 1992.6 ..A3.6 ..A388"},
    {"moves": 24, "board": "2224.. 7..499 7.++.8 1166.8 B55AAA B...33"},
    {"moves": 23, "board": ".AA7.. .4.766 .4++.1 22C3.1 B.C399 B55588"},
    {"moves": 27, "board": "6.55.. 6.AA97 ++1.97 331..B 222CCB 8844.."},
    {"moves": 25, "board": "222AA8 555498 ++149B 3.166B 3...CC .77..."},
    {"moves": 23, "board": "6.99.B 6.442B 6++321 88A321 ..ACCC 7755.."},
    {"moves": 22, "board": "4445.9 2215.9 ++1..3 771883 BBAAC3 .666C."},
    {"moves": 27, "board": "CC333. 444BB5 ++6..5 ..6.12 7.9912 788AAA"},
    {"moves": 24, "board": "8..1CC 877145 ++9.45 ..9BB5 222A.. 66.A33"},
    {"moves": 23, "board": ".94441 .97721 3++.26 355526 ..8.AA ..8..."},
    {"moves": 22, "board": ".73.11 A73..C A7++.C 9224.C 9.54BB 88566."},
    {"moves": 21, "board": ".922.. .94443 ++A.C3 88A1C. B66155 B..77."},
    {"moves": 21, "board": "..3... .1322. 61++85 6...85 444.7. ....7."},
    {"moves": 22, "board": "...11. 44486. ++7865 9.7265 9BB2.. .AA33."},
    {"moves": 24, "board": "5..... 5.2278 ++4.78 664..1 AAA331 99...."},
    {"moves": 23, "board": "..5... B.5113 B++8.3 6..8.4 6AA2.4 77.299"},
    {"moves": 28, "board": ".14488 .1..75 .1++75 .22A75 9..A33 9.66BB"},
    {"moves": 25, "board": "..888B AA5..B ++5..B .49933 .42211 .6677."},
    {"moves": 23, "board": "DD.CBB 777C35 9.++35 9.6885 A26... A21144"},
    {"moves": 24, "board": "8.4622 8.46.9 8.++A9 CC55A9 .B7733 .B11DD"},
    {"moves": 23, "board": "5557.. 4..788 4.2++3 ..29.3 6.2911 6.AAA."},
    {"moves": 21, "board": "7BB66. 799.5. 1++.52 1AAA52 .433CC .4888."},
    {"moves": 22, "board": ".95522 A977.C A++..C .1144C 3..6BB 3886.."},
    {"moves": 22, "board": "54446. 5.996. ++236. ..2388 1113.. ...77."},
    {"moves": 22, "board": "A88.36 A5..36 A5.++6 4..2.. 411299 ...777"},
    {"moves": 24, "board": "999AA6 7744.6 ++5..1 2.5C81 233C8. ...BBB"},
    {"moves": 24, "board": ".445.. 8885.B ++137B 66137A 2.997A 2....."},
    {"moves": 21, "board": "..447. .2227. .3++6. .31.6. ..188. ...55."},
    {"moves": 26, "board": "B..311 B.C3.2 ++C672 888679 44..79 .AA559"},
    {"moves": 24, "board": "8.2511 8.25.4 8.++94 BB6694 .C33DD .CAA77"},
    {"moves": 21, "board": "88.66. ..7255 ++72.. ..7944 .3.9.1 .3AAA1"},
    {"moves": 24, "board": ".AAA26 ....26 .9++24 .9B554 89B111 87733."},
    {"moves": 21, "board": ".4.177 .4.1.. .4++A2 .99.A2 8BBBA6 833556"},
    {"moves": 25, "board": "45.377 45.32. 4.++2A 99B.2A ..B11. 8866.."},
    {"moves": 26, "board": "2777.. 2..356 ++4356 ..415. ...188 ...99."},
    {"moves": 21, "board": "2.CC88 24433D ++5..D BB5.61 A.9961 A.7771"},
    {"moves": 21, "board": "..3444 ..3955 .++91. .7..16 .72216 ...88."},
    {"moves": 21, "board": ".AA55. ...388 .++3.. .4.377 .4662. 11992."},
    {"moves": 22, "board": ".CC5.. 8..533 8A.++D 6A.11D 6999B7 4422B7"},
    {"moves": 21, "board": ".11..7 .44.87 .5++87 .5.622 3996.. 3BBAAA"},
    {"moves": 23, "board": "7781.A 6.81.A 6++9.A ...944 .5.22. .533BB"},
    {"moves": 23, "board": "3997.. 3.67.. ++6.A5 4488A5 222115 ......"},
    {"moves": 25, "board": ".8AA44 .811.9 78++.9 7226.9 ...6BB .5533."},
    {"moves": 29, "board": ".C2299 .C4448 ++51.8 7.51BB 7.336A ....6A"},
    {"moves": 24, "board": "CCC22B 33351B ++.51A 6.771A 6.8.DD 44899."},
    {"moves": 21, "board": ".5..22 .5666C ++1D3C 991D3B 7.443B 7.AA88"},
    {"moves": 22, "board": "1886.. 1A9655 1A9++2 3337.2 ...744 ......"},
    {"moves": 24, "board": "DD4447 855597 8.++92 AAC3.2 ..C311 BBC.66"},
    {"moves": 22, "board": "BBB455 22.4C. 7.++C9 733119 7.A8.. ..A866"},
    {"moves": 21, "board": "444C.. B..C22 B++83. B55837 9AA117 9666.."},
    {"moves": 31, "board": "6661.. ..51AA ++5..8 77CC.8 2999BB 2.3344"},
    {"moves": 21, "board": "55661B 99971B ++27.3 ..2AA3 4.DD.. 488CCC"},
    {"moves": 21, "board": ".3..CC .39992 ++7452 BB7456 A.8856 A.DD11"},
    {"moves": 23, "board": "555CC. 9977.. ++3... 2234B8 A114B8 A.6668"},
    {"moves": 22, "board": "A1.BB. A1.663 .1++93 .88293 7..255 7CC44."},
    {"moves": 22, "board": ".3336B ..896B ++89.. .7.115 27A..5 27A.44"},
    {"moves": 22, "board": ".677AA 46BB.8 4++..8 .11998 ...522 .335.."},
    {"moves": 21, "board": "A998.. A..822 7++8.6 7.5336 ..5.11 445..."},
    {"moves": 22, "board": "29945. 2.745B ++74.B 88.33. 111AA. ..66CC"},
    {"moves": 26, "board": "..5... ..53.6 ++53.6 911226 98847. ...47."},
    {"moves": 26, "board": "82226. 8..76. ++173. ..143. ...455 ......"},
    {"moves": 21, "board": "9CC55. 911.6. B++.62 B77762 .A4433 .A.88."},
    {"moves": 22, "board": ".BB.66 ..5888 ++5..7 A22447 A1.9.7 A1.933"},
    {"moves": 22, "board": ".888BB 1222.6 1A++.6 .A.446 .A.399 .55377"},
    {"moves": 22, "board": "22.33. 8..4.. 8++49. 11549. ..5777 .666AA"},
    {"moves": 23, "board": "99AAA6 5553.6 ++.3.7 288DD7 2.4.11 BB4.CC"},
    {"moves": 22, "board": "..A66. 8.A222 8++3.5 .443.5 119995 ..777."},
    {"moves": 23, "board": ".9666A .97BBA ++7..A 533888 5.4411 222CC."},
    {"moves": 27, "board": "2.C544 2.C596 2.++96 881116 33AAA. ..BB77"},
    {"moves": 22, "board": "8AADD. 86677. ++4C9. 114C95 .23335 .2BB.."},
    {"moves": 23, "board": "C.444A C.199A ++1..A .62288 56DD33 577BB."},
    {"moves": 29, "board": "8113AA 85532. 8.++2C 44B.2C ..B777 .6699."},
    {"moves": 24, "board": "8.6644 8.CC33 ++B..2 ..B112 7775.2 99.5AA"},
    {"moves": 21, "board": "9.77.. 988A52 ++1A52 .31..2 .344BB ....66"},
    {"moves": 22, "board": "AA222C 333.9C ++1.96 8.1776 8.55.. BB44.."},
    {"moves": 24, "board": "7.66.. 79958A ++258A ..2..1 333441 ......"},
    {"moves": 23, "board": "8.229. 8.A.97 ++AB.7 444B.5 661115 ..333."},
    {"moves": 22, "board": "332..9 5.2..9 5.++.4 5111.4 777688 ...6.."},
    {"moves": 30, "board": ".633CC .6D.BB ++D.17 8.9917 85521A 4442.A"},
    {"moves": 24, "board": "866999 8.1555 ++1.7A .4227A .4BB73 .....3"},
    {"moves": 21, "board": "A77539 A.6539 ++68.9 4228.. 41.BB. 41.CC."},
    {"moves": 27, "board": ".33321 ..B921 ++B9.. 4.7955 4.788A ..666A"},
    {"moves": 24, "board": "64.... 64A211 ++A2.. ..A97B 58897B 5.333."},
    {"moves": 21, "board": "1BB77. 1.664A 1++34A 55534A ..922. ..988."},
    {"moves": 24, "board": "9661.. 9.31.. ++3.B2 AA88B2 777552 ...444"},
    {"moves": 21, "board": "B38866 B3442A .3++2A .7712A ...199 ...55."},
    {"moves": 22, "board": "66623A ...23A ..++3. 5.988. 54911. .477.."},
    {"moves": 21, "board": "AA881C 62221C 6.7++3 9975.3 ..7544 ....BB"},
    {"moves": 23, "board": "888A1. .44A1. .3++16 .399.6 ..255. ..277."},
    {"moves": 21, "board": ".6BB8C .61A8C ++1A.C 5.2933 5.2977 ....44"},
    {"moves": 21, "board": "...8B6 3778B6 3.4++5 224..5 .1...5 .1AA99"},
    {"moves": 22, "board": ".8999C .8112C .++A2D 443A2D 6.3555 677BB."},
    {"moves": 22, "board": "..4AAA 3347.9 8++719 8...19 22.5.. ...566"},
    {"moves": 21, "board": "9.BB22 9....5 ++36.5 4436.7 ..8887 ..11AA"},
    {"moves": 25, "board": "ABB.96 A5..96 A5++.6 8..244 833277 ..11CC"},
    {"moves": 25, "board": "..331. .6661. .++.48 .29948 .2577. ..5..."},
    {"moves": 21, "board": ".77.33 .444C9 ++5AC9 8.5AC6 821..6 821.BB"},
    {"moves": 27, "board": "DDD77. 222CC9 B++349 B.1345 A61.45 A61.88"},
    {"moves": 21, "board": "..4A66 884AC9 B.++C9 B..777 333225 111..5"},
    {"moves": 25, "board": "6..944 6..975 1.++75 133375 1.8AA. 228.BB"},
    {"moves": 21, "board": "93.88. 93155. ++1..7 ..1BA7 422BA7 4CC666"},
    {"moves": 27, "board": ".D7744 .D8225 ++8..5 1AA63. 1BB63C 99..3C"},
    {"moves": 21, "board": "4.BB.9 4.7789 4++389 66138. ..1255 .AA2.."},
    {"moves": 23, "board": "CC777. 444559 ++.219 833216 8.A.16 8.A.BB"},
    {"moves": 22, "board": "1555CC 1266.8 32++.8 344998 ...7AA .BB7.."},
    {"moves": 29, "board": "33222. 44411A ++8..A 5587C9 B667C9 B....."},
    {"moves": 21, "board": ".6.... .6..2. .6++2. 44512. ..5177 .3388."},
    {"moves": 27, "board": "2.6669 2...79 2++.78 553.78 ..3AAA 4411.."},
    {"moves": 26, "board": ".18877 .133.2 .1++.2 AA54.2 B.5499 B666.."},
    {"moves": 23, "board": "A58844 A5113. A5++3C 622.3C 6..977 BB.9.."},
    {"moves": 21, "board": "D66BB5 D77.35 C++.32 C99932 C8111. .844AA"},
    {"moves": 23, "board": "A9933. A..5BB ++.58. 77748. .1248. .1266."},
    {"moves": 21, "board": ".4446. 711163 7.++63 9..288 9.52.. AA52.."},
    {"moves": 22, "board": "..AA.8 4441.8 ++31.6 B.3..6 B.5599 ..7722"},
    {"moves": 24, "board": "222668 DD7798 4.++91 4AA5.1 ..E5CC BBE33."},
    {"moves": 27, "board": "1884.. 1C34DD .C3++9 .66.A9 222.A5 BBB775"},
    {"moves": 22, "board": "..466. 3.4.5. 3++.5. 11995. .8777. .822.."},
    {"moves": 21, "board": ".69933 .6BB.C ++7..C 557A84 122A84 1.DD.."},
    {"moves": 21, "board": ".11167 ....67 .5++43 .58.43 ..822. ......"},
    {"moves": 24, "board": "9AA222 9.3566 ++351. .77.18 .44418 ......"},
    {"moves": 23, "board": ".88AA. 99926. .++265 .73445 .73115 ......"},
    {"moves": 23, "board": "1122D. 6667D4 ++.7.4 E99BB5 E.3CC5 AA3.88"},
    {"moves": 22, "board": "BBB22C 55511C ..3++6 9.38.6 9..877 ..AA44"},
    {"moves": 21, "board": "999AA. 4388C. 43++C7 466227 B..511 B..5.."},
    {"moves": 21, "board": "11177. 222BB. ++8..9 CC83A9 5443A. 5.666."},
    {"moves": 22, "board": "5..... 5.2211 ++4..8 774A.8 333A.6 ..99.6"},
    {"moves": 21, "board": ".12227 .1B..7 ++B.4C 33994C 6.8855 6AA..."},
    {"moves": 21, "board": ".6CCDD .61444 ..1++2 77B.A2 8.B5A9 8335A9"},
    {"moves": 22, "board": ".BB.CC .88857 ++1257 33125A 9.6..A 9.6.44"},
    {"moves": 22, "board": "..3338 99A..8 7.A++8 74441. 7..21. 66.255"},
    {"moves": 24, "board": "AA.B.. 5..BC. 52++C7 1244C7 12899. 33866."},
    {"moves": 27, "board": ".BB7.. .A.733 6A++.D 69992D 455.28 4CC118"},
    {"moves": 25, "board": "1BCCC3 1B...3 ++8.7A 228.7A 6.8555 699444"},
    {"moves": 23, "board": "..2333 ..2887 ++56.7 AA5649 1BB649 1....."},
    {"moves": 30, "board": "22.1.. 6551.7 6.8++7 338..7 ..8444 ..999."},
    {"moves": 23, "board": ".9222D 79116D 7++C6B 533C6B 5.4888 ..4AA."},
    {"moves": 24, "board": ".7..11 A7666B A7++.B 5543.B ..4388 .9922."},
    {"moves": 21, "board": "...844 ..28.B 6.2++B 6..111 AA3335 777995"},
    {"moves": 22, "board": ".211A. .24.A. ++4..8 399958 36675. 3..7.."},
    {"moves": 21, "board": "333884 555..4 ++6..A 2.6.1A 2.991. .777.."},
    {"moves": 23, "board": ".4443. ..773. .++.28 ..1.28 .51998 .566AA"},
    {"moves": 22, "board": "AB3355 AB2267 CB++67 C88.67 ...411 .994.."},
    {"moves": 26, "board": "DD7771 44CCA1 ++..A3 ..2663 9.2.88 955BB."},
    {"moves": 22, "board": "64.999 6411.5 84++.5 877B.5 8..B33 ..22AA"},
    {"moves": 27, "board": "13.AA. 13..2C 9D++2C 9D552C 9D6B77 886B44"},
    {"moves": 22, "board": ".33364 ....64 .A++62 .A5..2 7A5.11 79988."},
    {"moves": 21, "board": "9B.888 9B.655 9++6A7 ..33A7 ..1447 221..."},
    {"moves": 23, "board": ".B6668 .B9..8 ++9..4 119AA4 .3332. 77552."},
    {"moves": 23, "board": "DDD4CC 55.466 ++.4BE 8.77BE 8.2AA9 332119"},
    {"moves": 22, "board": ".66888 9933C5 .++.C5 ..177B AA144B DD222B"},
    {"moves": 21, "board": "..AAA. 772.5. ++285. .368.. 436BB. 411999"},
    {"moves": 23, "board": "A.221. A.5.1. ++5..4 BB33.4 777994 .66888"},
    {"moves": 25, "board": "...... ..2388 ++2357 6..357 61114. ....4."},
    {"moves": 22, "board": "88444B 6662.B ++.239 A.5539 A.1CC9 771..."},
    {"moves": 21, "board": "..222. .88.1. ++3.1. 9.355. 977666 44...."},
    {"moves": 27, "board": "4...3. 46663. ++1875 ..1875 ...922 ...9.."},
    {"moves": 28, "board": "CCC442 111992 D.++B7 D.88B7 ..6355 EE63AA"},
    {"moves": 23, "board": "4..166 4..17B 4.++7B 332.7. ..2889 .55AA9"},
    {"moves": 28, "board": "884B.. 9.4B27 93++27 13AAA7 1..566 ...5.."},
    {"moves": 21, "board": "..77.. 335.88 ++5..9 115669 444A.. ...A22"},
    {"moves": 24, "board": "445559 222379 ++.37. 166AAB 1.8..B 1.8.CC"},
    {"moves": 21, "board": "887771 4.5531 4.++3C 99BA3C ..BA66 ...22."},
    {"moves": 25, "board": "7772.. 9..2CC 9.++.A 5511.A 4BB666 4.8833"},
    {"moves": 21, "board": "B.555. B.3399 ++6..4 226.74 .11174 .AA.88"},
    {"moves": 22, "board": "..2244 333CC9 ++..19 7.AA1B 7.851B 7.8566"},
    {"moves": 21, "board": ".34477 A35558 A3++.8 .662.8 ...211 .999.."},
    {"moves": 21, "board": "..A333 ..A119 ++85.9 6.8524 677524 ......"},
    {"moves": 23, "board": ".....9 333119 2.++B7 2.66B7 ..5844 AA58.."},
    {"moves": 23, "board": ".7..44 67..BA 67++BA 8835.A ..3599 .2211."},
    {"moves": 21, "board": ".A2299 .A355C ++3.BC 1..6B4 1886B4 ..777."},
    {"moves": 22, "board": ".4555. .486BB ++862A 39962A 3CC.1D EE771D"},
    {"moves": 23, "board": "..5599 B77CC8 B.++18 .A4418 .A.233 .662.."},
    {"moves": 21, "board": "1..2BB 1.42.. 1.4++A 7733.A .8666A .89955"},
    {"moves": 28, "board": ".7773. ....3. .++.1. .5881. .5644. 226..."},
    {"moves": 22, "board": "114458 92AA58 927++8 CC73.. ..73DD BB666."},
    {"moves": 24, "board": "222449 333B89 ++.B86 A11CC6 A..777 A..555"},
    {"moves": 21, "board": "..A665 3.ADD5 3.++7C 38897C 2B.944 2B.111"},
    {"moves": 23, "board": ".22236 ..AA36 14++35 14...5 1.7.88 BB799."},
    {"moves": 22, "board": "...399 AA435. ++425. 1142CC 8.77.B 8666.B"},
    {"moves": 22, "board": ".4.77. .45568 .4++68 221.6. ..133. .99AA."},
    {"moves": 22, "board": "CC222. ..A999 ++A7.. 331766 551884 DDBB.4"},
    {"moves": 21, "board": "8859.. .359AA 73++12 7BB612 ...6DD ..44CC"},
    {"moves": 21, "board": "488833 4.22.9 4.A++9 ..A559 ..A677 1116.."},
    {"moves": 26, "board": ".45557 .4..A7 ++6.A7 2.6888 211333 ..99BB"},
    {"moves": 24, "board": "B.443. B.8.3. ++87.9 1117.9 AAA229 .66555"},
    {"moves": 23, "board": ".ACCCD .A661D ++2917 3329B7 855.B. 8..44."},
    {"moves": 27, "board": ".52299 .588.4 15++34 1CCA34 ...ABB ..6677"},
    {"moves": 29, "board": "44499. 557778 ++6..8 ..6B3A C11B3A CDD222"},
    {"moves": 22, "board": "777229 444..9 ++3.16 8.3.16 8.AA1. ..555."},
    {"moves": 26, "board": "133A4. 1.5A4. ++5.49 .68889 .62277 .BBB.."},
    {"moves": 22, "board": "97.666 97...1 .7++41 .22541 ...5AA .8833."},
    {"moves": 28, "board": ".66AAA 44.533 ++.5.9 1777.9 1.8CC9 228BB."},
    {"moves": 23, "board": "6.BBB. 6.888. ++.3A1 2223A1 554491 ..779."},
    {"moves": 23, "board": "119995 A66.45 A2++4. A2.833 7DB8.C 7DBEEC"},
    {"moves": 22, "board": "CCC22. .44A.. ++BA.1 6.B551 6.997. 88337."},
    {"moves": 22, "board": "3.BCCC 3.B55A ++B17A .DD179 .22849 666849"},
    {"moves": 28, "board": ".8887. ....7. .++.4. .1224. .1366. 553..."},
    {"moves": 29, "board": "..266. 1.299A 1++45A .BB45. 77743. .8883."},
    {"moves": 26, "board": "1..... 144428 7++328 76.3.5 76B995 AAB..."},
    {"moves": 25, "board": "333119 B.4AA9 B.4++9 B22788 ...7.. .6655."},
    {"moves": 21, "board": "...77. 33..16 5++.16 52221. 884... ..4999"},
    {"moves": 22, "board": ".44655 .9.6.A .9++3A .8883A ..2111 772.BB"},
    {"moves": 22, "board": "88662. 111C2. ++AC2B ..A55B 4.33.. 49977."},
    {"moves": 21, "board": "8.994. 8.5.4. ++5..7 11...7 666337 ....22"},
    {"moves": 23, "board": "..99CC 77333A ++.4BA E884B5 E.2115 DD2.66"},
    {"moves": 23, "board": ".811AA B82227 B++..7 .33997 ...455 .664.."},
    {"moves": 23, "board": ".3DD77 13999A 1++68A BB468C ..422C ..4555"},
    {"moves": 30, "board": ".12666 .12..A ++27.A 4557.9 4....9 883339"},
    {"moves": 21, "board": "8.2221 8...31 5++.39 544439 ..6.77 ..6.AA"},
    {"moves": 23, "board": "44AA68 395568 39.++8 3221D. CC71D. ..71BB"},
    {"moves": 29, "board": "4.88.. 4DD725 ++3725 BB3..9 CCC119 66AA.."},
    {"moves": 24, "board": "99.778 222448 ..++.3 B.6AA3 B.6155 .CC1.."},
    {"moves": 21, "board": "....BB 222556 8.++36 844739 8.A739 ..A711"},
    {"moves": 22, "board": "B8.66. B8.AA2 B8++72 .99172 3..144 3CC55."},
    {"moves": 21, "board": ".2.AA. .2..67 .2++67 85516. 8..199 8.3344"},
    {"moves": 25, "board": "99.8.3 45.8.3 45++.3 4772.. ..62AA ..6111"},
    {"moves": 25, "board": ".7AA93 .7BC93 ++BC53 82215. 8..1.. ..4466"},
    {"moves": 21, "board": "62233. 6.7... ++754. .9954. 11154. ..88.."},
    {"moves": 25, "board": ".99955 .6CCCB 26++.B 28844B ..3A11 773A.."},
    {"moves": 25, "board": "8BB54. 8.6541 ++6..1 999771 ..CC33 .222AA"},
    {"moves": 22, "board": ".CCCD3 9A66D3 9A2++7 4421.7 B..155 B88.EE"},
    {"moves": 23, "board": "...2CC 3442.A 3.7++A ..7111 55666B .8899B"},
    {"moves": 22, "board": "666887 55.1.7 ++.1C3 2B99C3 2BA.C. 2.A44."},
    {"moves": 23, "board": "BB877. ..8.99 ++8..A 455.2A 43332A 11..66"},
    {"moves": 24, "board": "4..599 4..58. 7.++81 7AAA81 7.B222 33B66."},
    {"moves": 24, "board": "755111 733B.9 ++.B.9 866229 8A..4. .ACC4."},
    {"moves": 22, "board": "4446.B 2236AB ++3.A8 755.18 7.9918 ....CC"},
    {"moves": 31, "board": "33311B CC22.B ++59.B ..59AA 8.776. 84446."},
    {"moves": 24, "board": "9.2A11 9.2A.D 9.++5D 44885D .377BB .3CC66"},
    {"moves": 24, "board": ".BB6.. .83677 .83++9 C11159 C22.5A ...44A"},
    {"moves": 24, "board": "B..533 B44526 B.++26 119.2A ..988A .77CC."},
    {"moves": 21, "board": ".88.11 .7774A .3++4A .32.49 .32669 .555.."},
    {"moves": 22, "board": "8553.. 8.73.1 ++7..1 .22661 .9AABB .9..44"},
    {"moves": 21, "board": "22.478 1..478 1++.5B 669.5B ..9CCC .AA33."},
    {"moves": 22, "board": ".A..77 .A8..3 6B8++3 6B4413 .B.21. .99255"},
    {"moves": 24, "board": "....33 44482C ++A82C 55A.29 7.1119 7.BB66"},
    {"moves": 21, "board": "CCC558 339..8 6.9++8 677B44 AA.B11 ....22"},
];

warningGiven = false;
function lsLoad(key) {
    try {
        value = localStorage.getItem(key);
    } catch (e) {
        if (!warningGiven) {
            alert("Cannot access local storage. Game state and puzzle records won't be saved.");
            warningGiven = true;
        }
        return null;
    }
    if (value === '' || value === null)
        return null;
    return JSON.parse(value);
}

function lsStore(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // Just ignore errors
    }
}

function loadRecords() {
    return lsLoad('puzzle-records') || {};
}

function storeRecords(records) {
    lsStore('puzzle-records', records);
}

class Piece {
    constructor(props) {
        this.isMain = props.isMain;
        this.x = props.x;
        this.y = props.y;
        this.dx = props.dx;
        this.dy = props.dy;
    }
}

class Move {
    constructor(props) {
        this.index = props.index;
        this.dx = props.dx;
        this.dy = props.dy;
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        var pieces, size;
        var posStr = this.getPosStr();

        if (posStr) {
            var pieceBounds = {};
            var lines = posStr.replace(/ /g, '\n').split('\n');
            size = lines.length;
            for (var y in lines) {
                y = y|0;
                var line = lines[y];
                for (var x in line) {
                    x = x|0;
                    var c = line[x];
                    if (c == '.')
                        continue;
                    if (pieceBounds[c] === undefined)
                        pieceBounds[c] = [x, y, x, y];
                    else {
                        var [ox, oy, _, _] = pieceBounds[c];
                        pieceBounds[c] = [ox, oy, x, y];
                    }
                }
            }
            pieces = [];
            for (var piece in pieceBounds) {
                var [x1, y1, x2, y2] = pieceBounds[piece];
                pieces.push(new Piece({isMain: piece == '+',
                    x: x1, y: y1, dx: x2 - x1 + 1, dy: y2 - y1 + 1}));
            }
        } else {
            size = props.size;
            pieces = props.pieces;
        }

        // Create a [y][x] -> piece index mapping
        var board = [];
        for (var y = 0; y < size; y++) {
            var row = [];
            for (var x = 0; x < size; x++)
                row.push(-1);
            board.push(row);
        }
        for (var index in pieces) {
            piece = pieces[index];
            this.place(board, piece, index|0);
        }

        this.drag = this.drag.bind(this);
        this.dragEnd = this.dragEnd.bind(this);

        this.state = {
            // Board state stuff
            size: size,
            pieces: pieces,
            board: board,
            moves: [],
            futureMoves: [],

            // Dragging stuff
            draggingIndex: null,
            dragStartX: null,
            dragStartY: null,
            offsetX: null,
            offsetY: null,
            // For velocity calculations
            dragLastX: null,
        };
    }

    place(board, piece, index) {
        for (var x = piece.x; x < piece.x + piece.dx; x++)
            for (var y = piece.y; y < piece.y + piece.dy; y++)
                board[y][x] = index;
    }

    // Make a move. Sentinel value of null goes forward or backwards in history, depending on 'reverse'
    doMove(move, reverse) {
        var moves = this.state.moves;
        var futureMoves = this.state.futureMoves;
        if (move !== null) {
            moves.push(move);
            futureMoves = [];
        } else {
            if (reverse) {
                move = moves.pop();
                futureMoves.push(move);
            } else {
                move = futureMoves.pop();
                moves.push(move);
            }
        }

        var piece = this.state.pieces[move.index];
        // Remove old piece
        this.place(this.state.board, piece, -1)
        // Move piece position
        var dx = move.dx, dy = move.dy;
        if (reverse)
            dx = -dx, dy = -dy;
        piece.x += dx;
        piece.y += dy;
        // Place new piece
        this.place(this.state.board, piece, move.index)

        this.setState({board: this.state.board, pieces: this.state.pieces,
            moves: moves, futureMoves: futureMoves});

        // Store the backward/forward move history into local storage, as well as
        // this puzzle's initial configuration so we can verify them if the page gets reloaded
        lsStore('current-puzzle-moves', moves.map((m) => [m.index, m.dx, m.dy]));
        lsStore('current-puzzle-future-moves', futureMoves.map((m) => [m.index, m.dx, m.dy]));
        lsStore('current-puzzle-pos-str', this.getPosStr());
    }

    isWon() {
        for (var piece of this.state.pieces)
            if (piece.isMain)
                return piece.x + piece.dx >= this.state.size;
        throw 'What?';
    }

    getPosStr() {
        var posStr = this.props.posStr;
        if (this.props.puzzleNumber !== null)
            posStr = PUZZLES[this.props.puzzleNumber].board;
        return posStr;
    }

    updateRecords() {
        if (!this.isWon())
            throw 'bad update';
        var moves = this.state.moves.length;

        // Grab the initial position string, so the records aren't sensitive to the ordering of puzzles.
        var posStr = this.getPosStr();
        if (posStr) {
            var records = loadRecords();
            if (records[posStr] === undefined || records[posStr] > moves) {
                records[posStr] = moves;
                storeRecords(records);
            }
        }
    }

    getPieceBounds(piece) {
        var minX = 0, maxX = 0, minY = 0, maxY = 0;
        if (piece.dx > 1) {
            // Left
            for (var x = piece.x - 1; x >= 0 && this.state.board[piece.y][x] == -1; x--)
                minX--;
            // Right
            for (var x = piece.x + piece.dx; x < this.state.size && this.state.board[piece.y][x] == -1; x++)
                maxX++;
            // Check for moving the main piece out of bounds for the winning move
            //if (piece.isMain && x == this.state.size)
            //    maxX++;
        } else {
            // Up
            for (var y = piece.y - 1; y >= 0 && this.state.board[y][piece.x] == -1; y--)
                minY--;
            // Down
            for (var y = piece.y + piece.dy; y < this.state.size && this.state.board[y][piece.x] == -1; y++)
                maxY++;
        }
        return [minX * BOX_WIDTH, maxX * BOX_WIDTH, minY * BOX_WIDTH, maxY * BOX_WIDTH];
    }

    dragStart(index, e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.targetTouches)
            e = e.targetTouches[0];
        if (e.button !== undefined && e.button !== 0)
            return;
        this.setState({dragStartX: e.pageX, dragStartY: e.pageY, draggingIndex: index});
    }

    drag(e) {
        // Prevent default whether we're actually dragging a piece or not, to prevent
        // overscrolling. Pretty hacky!
        e.preventDefault();

        if (this.state.draggingIndex === null)
            return;
        e.stopPropagation();
        if (e.targetTouches)
            e = e.targetTouches[0];
        this.setState({
            offsetX: e.pageX - this.state.dragStartX,
            offsetY: e.pageY - this.state.dragStartY
        });
    }

    dragEnd(e) {
        if (this.state.draggingIndex === null)
            return;
        e.stopPropagation();
        e.preventDefault();
        var piece = this.state.pieces[this.state.draggingIndex];
        var [minX, maxX, minY, maxY] = this.getPieceBounds(piece);
        var dx = 0, dy = 0;
        if (this.state.offsetX !== null)
            dx = Math.min(maxX, Math.max(minX, this.state.offsetX));
        if (this.state.offsetY !== null)
            dy = Math.min(maxY, Math.max(minY, this.state.offsetY));
        dx = Math.round(dx / BOX_WIDTH);
        dy = Math.round(dy / BOX_WIDTH);
        if (dx || dy) {
            this.doMove(new Move({index: this.state.draggingIndex, dx: dx, dy: dy}), null);
            // Check for winning states and update local storage to reflect the possible
            // new record. We do this in dragEnd since it's the only place where a "real"
            // move is made (i.e. not retracing history).
            if (this.isWon())
                this.updateRecords();
        }
        this.setState({offsetX: null, offsetY: null, draggingIndex: null});
    }

    componentWillMount() {
        // Make the mouse move/mouse up event handlers global, since we want to know whenever these
        // things happen, no matter where the mouse is
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.dragEnd);
        document.addEventListener('touchmove', this.drag);
        document.addEventListener('touchend', this.dragEnd);

        // Try to grab move lists for this puzzle, making sure they're for this puzzle
        var lsPosStr = lsLoad('current-puzzle-pos-str');
        if (lsPosStr == this.getPosStr()) {
            // We have to set these move lists up in a particular order, since doMove overwrites the
            // values in local storage. So first, we load both the backward and forward lists.
            // Then, make all the moves in the backwards list, and finally, load the future moves.
            var moves = lsLoad('current-puzzle-moves') || [];
            var futureMoves = lsLoad('current-puzzle-future-moves') || [];
            for (var [index, dx, dy] of moves)
                this.doMove(new Move({index: index, dx: dx, dy: dy}));
            this.setState({futureMoves:
                futureMoves.map(([index, dx, dy]) => new Move({index: index, dx: dx, dy: dy}))});
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('mouseup', this.dragEnd);
        document.removeEventListener('touchmove', this.drag);
        document.removeEventListener('touchend', this.dragEnd);
    }

    render() {
        var record = null;
        var posStr = this.getPosStr();
        if (posStr) {
            var records = loadRecords();
            if (records[posStr] !== undefined)
                record = records[posStr];
        }
        var optimal = null;
        if (this.props.puzzleNumber !== null)
            optimal = PUZZLES[this.props.puzzleNumber].moves;

        var isWon = this.isWon();

        return <div>

                <div className={ isWon ? 'overlay win-overlay' : 'overlay' }>
                    { isWon ?
                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                                <div style={{ color: '#FFF', fontWeight: 'bold', fontSize: '42px' }}>Nice.</div>
                                <div style={{ paddingTop: '40px' }}/>
                                <input type='button' disabled={ this.state.moves.length == 0 }
                                    onClick={ (e) => this.doMove(null, true) }
                                    className='button medButton' value='Stay Here'/>
                                <span style={{ paddingLeft: '40px' }}/>
                                <input type='button' disabled={ this.props.puzzleNumber == PUZZLES.length - 1 }
                                    onClick={ (e) => this.props.selectPuzzle(this.props.puzzleNumber + 1) }
                                    className='button medButton' value='Next Puzzle'/>
                            </div>
                        : <span />
                    }
                </div>
                <div style={{ paddingTop: '10px' }}/>

                <div>
                    <input type='button' disabled={ this.props.puzzleNumber == 0 }
                        onClick={ (e) => this.props.selectPuzzle(this.props.puzzleNumber - 1) }
                        className='button smallButton' value='&#x25C0;&#xFE0E;'/>
                    <div style={{ display: 'inline', width: '80px', margin: '5px' }}>
                        Puzzle {this.props.puzzleNumber + 1}
                    </div>
                    <input type='button' disabled={ this.props.puzzleNumber == PUZZLES.length - 1 }
                        onClick={ (e) => this.props.selectPuzzle(this.props.puzzleNumber + 1) }
                        className='button smallButton' value='&#x25B6;&#xFE0E;'/>
                    <span style={{ paddingLeft: '10px' }}/>
                    <input type='button' onClick={ (e) => this.props.selectPuzzle(null) }
                        className='button smallButton' value='List'/>
                </div>

                <div style={{ paddingTop: '10px' }}/>

                <div style={{ 
                    // This div is just to provide sizing for the winning piece clip
                    // rectangle (which is actually clipped by the ancestor's overflow:
                    // hidden), so it doesn't cause the page dimensions to blow up
                    // CSS IS INSANE
                    position: 'relative',
                    height: '100%',
                }}>
                <div className="inset-box" style={{
                    height: this.state.size * BOX_WIDTH,
                    width: this.state.size * BOX_WIDTH,
                    margin: 'auto',
                    borderWidth: '5px',
                    borderRadius: '5px',
                }} >
                { this.state.pieces.map((piece, index) => {
                        var x = piece.x * BOX_WIDTH, y = piece.y * BOX_WIDTH;
                        var isWinningPiece = piece.isMain && isWon;
                        if (index === this.state.draggingIndex) {
                            var [minX, maxX, minY, maxY] = this.getPieceBounds(piece);
                            if (this.state.offsetX !== null)
                                x += Math.min(maxX, Math.max(minX, this.state.offsetX));
                            if (this.state.offsetY !== null)
                                y += Math.min(maxY, Math.max(minY, this.state.offsetY));
                        }
                        return <div 
                                key={index}

                                onMouseDown={ (e) => this.dragStart(index, e) }
                                onTouchStart={ (e) => this.dragStart(index, e) }

                                style={{
                                    marginTop: y,
                                    marginLeft: isWinningPiece ? x + 2 * BOX_WIDTH : x,
                                    height: piece.dy * BOX_WIDTH,
                                    width: piece.dx * BOX_WIDTH,
                                    // Winning piece spins around and gets big enough to cover the screen
                                    transform: isWinningPiece ? 'scale(100, 100) rotate(720deg)' : '',
                                    opacity: isWinningPiece ? '.7' : 'inherit',
                                    zIndex: isWinningPiece ? '15' : 'inherit',
                                    // Animate movements, but only pieces that aren't currently being dragged
                                    transition: index !== this.state.draggingIndex ? 
                                        isWinningPiece ? 'transform 750ms 250ms, opacity 750ms, margin ease-in 250ms' : 'margin 250ms' : '',
                                    position: 'absolute'}}>
                                <div className={"block" + (piece.isMain ? " main-block" : "")}/>
                                <div className="block block-shadow"/>
                            </div>;
                    }) }
                </div> </div>

                <div style={{ paddingTop: '10px' }}/>

                <div style={{ height: '80px' }}>
                    <table style={{ margin: 'auto'}}><tbody><tr>
                        <td> <div className="inset-box move-info-box">
                            Moves: { this.state.moves.length }
                            { optimal !== null ? '/' + optimal : ''}
                            { record !== null ?
                                <span><br/>
                                    Record: {record}
                                    {record == optimal ? <font color="green">{'\u2713'}</font> : ''}
                                </span> 
                                : ''}
                        </div> </td>

                        <td>
                            <input type='button' disabled={ this.state.moves.length == 0 }
                                onClick={ (e) => this.doMove(null, true) }
                                className='button bigButton' value='&#x25C0;&#xFE0E;'/>
                        </td>
                        <td>
                            <input type='button' disabled={ this.state.futureMoves.length == 0 }
                                onClick={ (e) => this.doMove(null, false) }
                                className='button bigButton' value='&#x25B6;&#xFE0E;'/>
                        </td>
                    </tr></tbody></table>
                </div>
            </div>;
    }
}

class PuzzleList extends React.Component {
    render() {
        var records = loadRecords();
        return <div>
                <div>Select a puzzle!</div>
                <div style={{ paddingTop: '10px' }}/>
                <div className="list-holder">
                    <table><tbody>
                        { PUZZLES.map((p, i) => <tr key={i} onClick={() => this.props.selectPuzzle(i)}>
                                <td style={{ textAlign: 'left' }}>
                                    <div><strong>Puzzle { i + 1 }</strong></div>
                                    <div>{ p.moves } moves</div>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    { records && records[p.board] !== undefined ? 
                                        <span>Record: {records[p.board]}
                                            {records[p.board] == p.moves ?
                                                <font color="green">{'\u2713'}</font> : ''}
                                        </span> : ''}
                                </td>
                            </tr>) }
                    </tbody></table>
                </div>
            </div>;
    }
}

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.selectPuzzle = this.selectPuzzle.bind(this);

        // Try to load the current puzzle from local storage
        var currentPuzzle = lsLoad('current-puzzle');
        this.state = {currentPuzzle: currentPuzzle};
    }

    selectPuzzle(i) {
        this.setState({currentPuzzle: i});

        // Store the selected puzzle in local storage, and erase the move lists
        lsStore('current-puzzle', i);
        lsStore('current-puzzle-pos-str', i !== null ? PUZZLES[i].board : null);
        lsStore('current-puzzle-moves', []);
        lsStore('current-puzzle-future-moves', []);
    }

    render() {
        return <div style={{ 
                    textAlign: 'center',
                    fontFamily: 'Helvetica',
                    width: '100%',
                    height: '100%',
                    // Weird shit for centering
                    position: 'absolute',
                    display: 'table',
                    // This is to clip the winning piece at the screen boundary when it explodes
                    overflow: 'hidden',
                    }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <div className="inset-box" style={{
                        // HACK
                        width: 6 * BOX_WIDTH,
                        padding: '5px',
                        margin: 'auto',
                        fontSize: '30px',
                        fontWeight: 'bold' 
                    }} >
                        Slidey Blocky Thingy
                    </div>
                    { this.state.currentPuzzle !== null ?
                        <Board key={this.state.currentPuzzle} puzzleNumber={this.state.currentPuzzle}
                            selectPuzzle={this.selectPuzzle} />
                        : <PuzzleList selectPuzzle={this.selectPuzzle}/> }
                </div>
            </div>;
    }
}
