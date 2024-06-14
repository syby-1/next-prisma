import Image from 'next/image';
import Prisma from '@/../lib/eng.prisma';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import parser from 'html-react-parser';

export default async function Home() {
  const data = `
  <div id="preview" class="preview scrollEditor">
    <div id="container-ruller" />
    <div id="preview-content">
      <h1 type="title" class="main-title preview-paragraph-0 preview-line 0 1 2 text-blue-900" id="mathematics" data_line_start="0" data_line_end="2" data_line="0,3" count_line="3">
      MATHEMATICS </h1>
  

  <ol class="preview-paragraph-236 preview-line 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323" data_line_start="236" data_line_end="323" data_line="236,324" count_line="88">
        <li class="text-blue dark:text-red">Real Numbers ..... 1<br>
        1.1 Introduction ..... 1<br>
        1.2 The Fundamental Theorem of Arithmetic ..... 2<br>
        1.3 Revisiting Irrational Numbers ..... 6<br>
        1.4 Summary ..... 9</li>
        <li>Polynomials ..... 10<br>
        2.1 Introduction ..... 10<br>
        2.2 Geometrical Meaning of the Zeroes of a Polynomial ..... 11<br>
        2.3 Relationship between Zeroes and Coefficients of a Polynomial ..... 18<br>
        2.4 Summary ..... 23</li>
          <li>Pair of Linear Equations in Two Variables ..... 24<br>
        3.1 Introduction ..... 24<br>
        3.2 Graphical Method of Solution of a Pair of Linear Equations ..... 25<br>
        3.3 Algebraic Methods of Solving a Pair of Linear Equations ..... 30<br>
        3.3.1 Substitution Method ..... 30<br>
        3.3.2 Elimination Method ..... 34<br>
        3.4 Summary ..... 37</li>
        <li>Quadratic Equations ..... 38<br>
        4.1 Introduction ..... 38<br>
        4.2 Quadratic Equations ..... 39<br>
        4.3 Solution of a Quadratic Equation by Factorisation ..... 42<br>
        4.4 Nature of Roots ..... 44<br>
        4.5 Summary ..... 47</li>
        <li>Arithmetic Progressions ..... 49<br>
        5.1 Introduction ..... 49<br>
        5.2 Arithmetic Progressions ..... 51<br>
        <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mn>5.3</mn>
          <mi>n</mi>
        </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mn>5.3</mn>
          <mi>n</mi>
        </math></mathmlword><asciimath style="display: none;">5.3 n</asciimath><latex style="display: none">5.3 n</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.05ex" xmlns="http://www.w3.org/2000/svg" width="4.249ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 1878 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500, 0)"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(778, 0)"></path></g><g data-mml-node="mi" transform="translate(1278, 0)"><path data-c="6E" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>5.3</mn><mi>n</mi></math></mjx-assistive-mml></mjx-container></span>th Term of an AP ..... 56<br>
        5.4 Sum of First <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mi>n</mi>
        </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mi>n</mi>
        </math></mathmlword><asciimath style="display: none;">n</asciimath><latex style="display: none">n</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.025ex" xmlns="http://www.w3.org/2000/svg" width="1.357ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 600 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="6E" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></mjx-assistive-mml></mjx-container></span> Terms of an AP ..... 63<br>
        5.5 Summary ..... 72</li>
        <li>Triangles ..... 73<br>
        6.1 Introduction ..... 73<br>
        6.2 Similar Figures ..... 74<br>
        6.3 Similarity of Triangles ..... 79<br>
        6.4 Criteria for Similarity of Triangles ..... 85<br>
        6.5 Summary ..... 97</li>
        <li>Coordinate Geometry ..... 99<br>
        7.1 Introduction ..... 99<br>
        7.2 Distance Formula ..... 100<br>
        7.3 Section Formula ..... 106<br>
        7.4 Summary ..... 112</li>
        <li>Introduction to Trigonometry ..... 113<br>
        8.1 Introduction ..... 113<br>
        8.2 Trigonometric Ratios ..... 114<br>
        8.3 Trigonometric Ratios of Some Specific Angles ..... 121<br>
        8.4 Trigonometric Identities ..... 128<br>
        8.5 Summary ..... 132</li>
        <li>Some Applications of Trigonometry ..... 133<br>
        9.1 Heights and Distances ..... 133<br>
        9.2 Summary ..... 143</li>
        <li>Circles ..... 144<br>
        10.1 Introduction ..... 144<br>
        10.2 Tangent to a Circle ..... 145<br>
        10.3 Number of Tangents from a Point on a Circle ..... 147<br>
        10.4 Summary ..... 153</li>
        <li>Areas Related to Circles ..... 154<br>
        11.1 Areas of Sector and Segment of a Circle ..... 154<br>
        11.2 Summary ..... 160</li>
        <li>Surface Areas and Volumes ..... 161<br>
        12.1 Introduction ..... 161<br>
        12.2 Surface Area of a Combination of Solids ..... 162<br>
        12.3 Volume of a Combination of Solids ..... 167<br>
        12.4 Summary ..... 170</li>
        <li>Statistics ..... 171<br>
        13.1 Introduction ..... 171<br>
        13.2 Mean of Grouped Data ..... 171<br>
        13.3 Mode of Grouped Data ..... 183<br>
        13.4 Median of Grouped Data ..... 188<br>
        13.5 Summary ..... 200</li>
        <li>Probability ..... 202<br>
        14.1 Probability — A Theoretical Approach ..... 202<br>
        14.2 Summary ..... 217<br>
        Appendix A1 : Proofs in Mathematics ..... 218<br>
        A1.1 Introduction ..... 218<br>
        A1.2 Mathematical Statements Revisited ..... 218<br>
        A1.3 Deductive Reasoning ..... 221<br>
        A1.4 Conjectures, Theorems, Proofs and Mathematical Reasoning ..... 223<br>
        A1.5 Negation of a Statement ..... 228<br>
        A1.6 Converse of a Statement ..... 231<br>
        A1.7 Proof by Contradiction ..... 234<br>
        A1.8 Summary ..... 238<br>
        Appendix A2 : Mathematical Modelling ..... 239<br>
        A2.1 Introduction ..... 239<br>
        A2.2 Stages in Mathematical Modelling ..... 240<br>
        A2.3 Some Illustrations ..... 244<br>
        A2.4 Why is Mathematical Modelling Important? ..... 248<br>
        A2.5 Summary ..... 249<br>
        Answers/Hints ..... 250</li>
</ol>

      <h2 type="section" data-unnumbered="true" class="section-title preview-paragraph-367 preview-line 367" id="real-numbers" data_line_start="367" data_line_end="367" data_line="367,368" count_line="1">
      REAL NUMBERS</h2>
      <h2 type="section" data-unnumbered="true" class="section-title preview-paragraph-369 preview-line 369" id="1" data_line_start="369" data_line_end="369" data_line="369,370" count_line="1">
      1</h2>
      <h3 type="subsection" data-unnumbered="true" class="sub_section-title preview-paragraph-371 preview-line 371" id="1.1-introduction" data_line_start="371" data_line_end="371" data_line="371,372" count_line="1">
      1.1 Introduction</h3>
      <div class="preview-paragraph-373 preview-line 373 text-[rgba(16,16,16,0.7)]" data_line_start="373" data_line_end="373" data_line="373,374" count_line="1">In Class IX, you began your exploration of the world of real numbers and encountered irrational numbers. We continue our discussion on real numbers in this chapter. We begin with two very important properties of positive integers in Sections 1.2 and 1.3, namely the Euclid's division algorithm and the Fundamental Theorem of Arithmetic.</div>
<div class="preview-paragraph-375 preview-line 375" data_line_start="375" data_line_end="375" data_line="375,376" count_line="1">Euclid's division algorithm, as the name suggests, has to do with divisibility of integers. Stated simply, it says any positive integer <span class="math-inline ">
    <mathml style="display: none">
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mi>a</mi>
        </math>
  </mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></mathmlword><asciimath style="display: none;">a</asciimath><latex style="display: none">a</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.023ex" xmlns="http://www.w3.org/2000/svg" width="1.197ex" height="1.02ex" role="img" focusable="false" viewBox="0 -441 529 451" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="61" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi></math></mjx-assistive-mml></mjx-container></span> can be divided by another positive integer <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></mathmlword><asciimath style="display: none;">b</asciimath><latex style="display: none">b</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.025ex" xmlns="http://www.w3.org/2000/svg" width="0.971ex" height="1.595ex" role="img" focusable="false" viewBox="0 -694 429 705" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="62" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi></math></mjx-assistive-mml></mjx-container></span> in such a way that it leaves a remainder <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></mathmlword><asciimath style="display: none;">r</asciimath><latex style="display: none">r</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.025ex" xmlns="http://www.w3.org/2000/svg" width="1.02ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 451 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="72" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi></math></mjx-assistive-mml></mjx-container></span> that is smaller than <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></mathmlword><asciimath style="display: none;">b</asciimath><latex style="display: none">b</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.025ex" xmlns="http://www.w3.org/2000/svg" width="0.971ex" height="1.595ex" role="img" focusable="false" viewBox="0 -694 429 705" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="62" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi></math></mjx-assistive-mml></mjx-container></span>. Many of you probably recognise this as the usual long division process. Although this result is quite easy to state and understand, it has many applications related to the divisibility properties of integers. We touch upon a few of them, and use it mainly to compute the HCF of two positive integers.</div>
      <div class="preview-paragraph-377 preview-line 377" data_line_start="377" data_line_end="377" data_line="377,378" count_line="1">The Fundamental Theorem of Arithmetic, on the other hand, has to do something with multiplication of positive integers. You already know that every composite number can be expressed as a product of primes in a unique way-this important fact is the Fundamental Theorem of Arithmetic. Again, while it is a result that is easy to state and understand, it has some very deep and significant applications in the field of mathematics. We use the Fundamental Theorem of Arithmetic for two main applications. First, we use it to prove the irrationality of many of the numbers you studied in Class IX, such as <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
          <mn>2</mn>
        </msqrt>
        <mo>,</mo>
        <msqrt>
          <mn>3</mn>
        </msqrt>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
          <mn>2</mn>
        </msqrt>
        <mo>,</mo>
        <msqrt>
          <mn>3</mn>
        </msqrt>
      </math></mathmlword><asciimath style="display: none;">sqrt2,sqrt3</asciimath><latex style="display: none">\sqrt{2}, \sqrt{3}</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.439ex" xmlns="http://www.w3.org/2000/svg" width="7.128ex" height="2.612ex" role="img" focusable="false" viewBox="0 -960.5 3150.7 1154.5" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="msqrt"><g transform="translate(853, 0)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g></g><g data-mml-node="mo" transform="translate(0, 100.5)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"></path></g><rect width="500" height="60" x="853" y="840.5"></rect></g><g data-mml-node="mo" transform="translate(1353, 0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g data-mml-node="msqrt" transform="translate(1797.7, 0)"><g transform="translate(853, 0)"><g data-mml-node="mn"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path></g></g><g data-mml-node="mo" transform="translate(0, 89)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"></path></g><rect width="500" height="60" x="853" y="829"></rect></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>2</mn></msqrt><mo>,</mo><msqrt><mn>3</mn></msqrt></math></mjx-assistive-mml></mjx-container></span> and <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
          <mn>5</mn>
        </msqrt>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
          <mn>5</mn>
        </msqrt>
      </math></mathmlword><asciimath style="display: none;">sqrt5</asciimath><latex style="display: none">\sqrt{5}</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.25ex" xmlns="http://www.w3.org/2000/svg" width="3.061ex" height="2.398ex" role="img" focusable="false" viewBox="0 -949.5 1353 1060" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="msqrt"><g transform="translate(853, 0)"><g data-mml-node="mn"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path></g></g><g data-mml-node="mo" transform="translate(0, 89.5)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"></path></g><rect width="500" height="60" x="853" y="829.5"></rect></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>5</mn></msqrt></math></mjx-assistive-mml></mjx-container></span>. Second, we apply this theorem to explore when exactly the decimal expansion of a rational number, say <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
        <mo stretchy="false">(</mo>
        <mi>q</mi>
        <mo>&#x2260;</mo>
        <mn>0</mn>
        <mo stretchy="false">)</mo>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
        <mo stretchy="false">(</mo>
        <mi>q</mi>
        <mo>≠</mo>
        <mn>0</mn>
        <mo stretchy="false">)</mo>
      </math></mathmlword><asciimath style="display: none;">(p)/(q)(q!=0)</asciimath><latex style="display: none">\frac{p}{q}(q \neq 0)</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -1.091ex" xmlns="http://www.w3.org/2000/svg" width="8.749ex" height="2.878ex" role="img" focusable="false" viewBox="0 -789.7 3867.2 1271.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mi" transform="translate(220, 477.2) scale(0.707)"><path data-c="70" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(235.2, -345) scale(0.707)"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><rect width="555.7" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(795.7, 0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1184.7, 0)"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><g data-mml-node="mo" transform="translate(1922.5, 0)"><path data-c="2260" d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path></g><g data-mml-node="mn" transform="translate(2978.2, 0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></g><g data-mml-node="mo" transform="translate(3478.2, 0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>p</mi><mi>q</mi></mfrac><mo stretchy="false">(</mo><mi>q</mi><mo>≠</mo><mn>0</mn><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container></span>, is terminating and when it is nonterminating repeating. We do so by looking at the prime factorisation of the denominator <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>q</mi>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>q</mi>
      </math></mathmlword><asciimath style="display: none;">q</asciimath><latex style="display: none">q</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.439ex" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="1.439ex" role="img" focusable="false" viewBox="0 -442 460 636" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container></span> of <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
      </math></mathmlword><asciimath style="display: none;">(p)/(q)</asciimath><latex style="display: none">\frac{p}{q}</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -1.091ex" xmlns="http://www.w3.org/2000/svg" width="1.8ex" height="2.878ex" role="img" focusable="false" viewBox="0 -789.7 795.7 1271.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mi" transform="translate(220, 477.2) scale(0.707)"><path data-c="70" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(235.2, -345) scale(0.707)"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><rect width="555.7" height="60" x="120" y="220"></rect></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>p</mi><mi>q</mi></mfrac></math></mjx-assistive-mml></mjx-container></span>. You will see that the prime factorisation of <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>q</mi>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>q</mi>
      </math></mathmlword><asciimath style="display: none;">q</asciimath><latex style="display: none">q</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -0.439ex" xmlns="http://www.w3.org/2000/svg" width="1.041ex" height="1.439ex" role="img" focusable="false" viewBox="0 -442 460 636" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi></math></mjx-assistive-mml></mjx-container></span> will completely reveal the nature of the decimal expansion of <span class="math-inline "><mathml style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
      </math></mathml><mathmlword style="display: none"><math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mi>p</mi>
          <mi>q</mi>
        </mfrac>
      </math></mathmlword><asciimath style="display: none;">(p)/(q)</asciimath><latex style="display: none">\frac{p}{q}</latex><mjx-container class="MathJax" jax="SVG" role="presentation" style="position: relative"><svg style="vertical-align: -1.091ex" xmlns="http://www.w3.org/2000/svg" width="1.8ex" height="2.878ex" role="img" focusable="false" viewBox="0 -789.7 795.7 1271.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mi" transform="translate(220, 477.2) scale(0.707)"><path data-c="70" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(235.2, -345) scale(0.707)"><path data-c="71" d="M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><rect width="555.7" height="60" x="120" y="220"></rect></g></g></g></svg><mjx-assistive-mml role="presentation" unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mi>p</mi><mi>q</mi></mfrac></math></mjx-assistive-mml></mjx-container></span>.</div>
<div class="preview-paragraph-379 preview-line 379" data_line_start="379" data_line_end="379" data_line="379,380" count_line="1">So let us begin our exploration.</div>
<h3 type="subsection" data-unnumbered="true" class="sub_section-title preview-paragraph-381 preview-line 381" id="1.2-the-fundamental-theorem-of-arithmetic" data_line_start="381" data_line_end="381" data_line="381,382" count_line="1">
1.2 The Fundamental Theorem of Arithmetic</h3>


    </div>
  </div>`;

  return (
    <main>
      <ThemeSwitcher />
      <p className="text-blue-800 dark:text-red-800">test</p>
      <span className="text-black-800 dark:text-red-800">{parser(data)}</span>
      <p>hi</p>
    </main>
  );
}
