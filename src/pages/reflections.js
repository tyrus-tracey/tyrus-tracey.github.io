const reflections = [
{
year: 2024,
semesters : [
    {
        name: "Fall",
        courses: [    
        {
            courseid: "CMPT361",
            courseName: "Introduction to Computer Vision",
            blurb: "Enhance 57-19. Track 45 left. Stop. Enhance 15 to 23.",
            highlights: [
                `learned about the various problems currently studied in Computer Vision`,
                `implemented a FAST-feature panorama program in MATLAB`,
                `programmed a rasterization pipeline in WebGL`
            ],
            content: [`
            Easily the stand-out for the semester. I didn't think too much about Computer Vision at first, but as I learned more through this course my interest has only grown. Gotta say, it's a lot of math, but this stuff is way cool!<br/><br/>
            The first brain-exploding moment was probably seeing why aliasing occurs. I had already learned about aliasing in CMPT365 (Multimedia Systems), but not by understanding it using the frequency domain. Once I got a grasp on how signal manipulation in the spatial domain affects its frequency domain representation, things just clicked together so beautifully! I'm definitely keen on learning more about working with Fourier transforms.<br/><br/>
            The really amazing thing was being able to create powerful vision tools from very simple building blocks. Who would've thought that all it took to create an edge-detection tool was some derivative information and a little trignometry?<br/><br/>
            What <i>really</i> piqued my interest was seeing how my previous Cognitive Science education could be applied to this field. If you're trying to model human vision, you should account for the components that allow for <b>sensation</b> (eyes, retina, rod/cones, etc.) To make a better model, you should also account for <b>perception</b>; for example, how do we:
            <ul>
            <li>pick out important features from an image?</li>
            <li>get the environmental context of an image just from looking at it?</li>
            <li>rectify visual information from both eyes into a single image?</li>
            </ul>
            These are but a few of the questions one studies in Cognitive Science, and I was pleased to see that even in a technical field like Computer Vision, these were significant considerations.<br/><br/>
            After the midterm, the course focused on Computer Graphics. I didn't find this section as challenging as Computer Vision, but it was interesting to see it as the "inverse problem" of vision, and how the rasterization process works. Going through shading models step-by-step, from Lambertian diffusion to Blinn-Phong specular shading, was a fun way of seeing the various challenges in understanding how light works. Now, I'll find myself looking at something in real-life and trying to pick apart how exactly it's being lit.<br/><br/>
            This course has opened my eyes on a whole new field to explore, and seeing that SFU offers several courses on vision and graphics, I'm quite keen to go deeper and find even more interesting problems. Might just have to take Calc 3 after all.
            `]
        },
        {
            courseid: "MACM316",
            courseName: "Numerical Analysis",
            blurb: "Unveiling floating-point mysteries.",
            highlights: [
                `reviewed pitfalls of floating-point arithmetic`,
                `studied numerical methods for linear algebra, differential calculus, and integral calculus`,
                `took advantage of special matrices to accelarate matrix operations`
            ],
            content: [`
            It's one thing to solve a math problem using pen and paper. It's another thing to get a computer to do it for you <b>reliably</b>. This was the message of the course: if you don't want silly results, you really need to know what the computer is doing.<br/><br/>
            Turns out, if I wanted to program my own matrix solver, I can't just write the Gaussian elimination algorithm from MATH232 (Applied Linear Algebra) and call it a day. For one, doing anything with floats necessitates the thought, <i>"Is the equation I am implementing robust?"</i> It's not just considering over/under-flows either. For example, programming the quadratic formula as taught in high-school is a <b>complete trap</b>: round-off errors will lead to totally incorrect solutions. So to minimize this, you want to make an extra version of the formula with the numerator rationalized, and then your program needs to be smart enough know which formula variant to use depending on the situation. For such a simple equation, things are already not so straightforward.<br/><br/>
            Then you need to consider the whole algorithm you are basing your program on. In CS, you're always trying to prove the efficiency of an algorithm, but for this course, you're proving the amount of error an algorithm will induce. If you don't have hard evidence of some error baseline, how can anyone trust your program? Going one level deeper, you might even consider how much accuracy you're willing to sacrifice to improve the efficiency of your program.<br/><br/>
            I've yet to find a single person who enjoyed taking this course, but it's entirely worthwhile to understand the amount of effort and due-dilligence required to write mathematically-sound code. After all, if I'm ever in charge with calculating something, I want to be 100% confident in my numbers.
            `]
        },
        {
            courseid: "CMPT307",
            courseName: "Data Structures and Algorithms",
            blurb: "Study this to be good at LeetCode, or study LeetCode to be good at this?",
            highlights: [
                `reviewed data structures and the problems they solve`,
                `modeled recursive algorithm runtimes using Master Theorem`,
                `explored NP problems and proving NP-Completeness`
            ],
            content: [`
            This is really a continuation of the theory elements of CMPT225, where instead of glossing over the exact details of how we calculate certain bounds, we go right into their proofs. Thus, while the syllabus for this course may appear too easy if you've just come out of 225, a lot more work is expected per section.<br/><br/>
            Graph theory is certainly not my strongest area, so I appreciated the opportunity to get more familiar with them. In particular, I found it cool that you could prove 3-Colouring as a NP-Complete problem by reducing 3SAT to it. Somehow, modeling 3-Colouring in this fashion makes it easier for me to grasp. Of course, actually sitting down to understand what exactly does NP, NP-Hard, and NP-Complete mean was quite valuable in itself.<br/><br/>
            This course was also good for forcing myself to really get fluent in Dynamic Programming. In addition, we learned some of the tricks used to improve on the shortcomings of DP, namely on their inefficient use of space. A programmer really ought to be comfortable with these concepts, after all.
            `]
        },
        {
            courseid: "CMPT371",
            courseName: "Data Communications and Networking",
            blurb: "All this work just to tell someone about their mother.",
            highlights: [
                `learned the purpose of each layer in the OSI model`,
                `analyzed network traffic scenarios using Wireshark`,
                `designed and created a web-server and a TCP-based protocol using Python`,
            ],
            content: [`
            If it wasn't for the programming assignments, I'd categorize this more as a biology course! I mean that in both the material and how one has to study for this: you're really learning the anatomy of the Internet, and it's a lot of reading and memorizing terms and concepts from the textbook. Some of the protocols we studied even reminded me of the molecular-level signaling systems in our own bodies. I suppose nature does have a head-start of several million years.<br/><br/>
            You really do appreciate the Internet (enough to capitalize it) when you realize the amount of work required to send just one packet over a network: it gets bundled into a TCP segment with connection-specific information, which gets bundled into a datagram containing IP data, which is then finally contained within a frame to be sent "over the wire". Then, when it reaches its destination, all those layers get unpacked and processed one-by-one before the other computer can actually read your message! This isn't even considering connection establishment, encryption, corruption-handling, authentication, network congestion, etc. It's a miracle how smooth things are, and building those components yourself is very rewarding.<br/><br/>
            It's great to see the professor (Ouldooz Baghban Karimi) offers research opportunities for those that are all about networking. I had been curious about network protocols after dabbling in some penetration-testing, which naturally got me introduced to TCP/UDP. I don't quite see this as my calling, but I'm glad the course satiated my curiosity.
            `]
        }   
        ]
    },
    {
        
        name: "Summer",
            courses: [
            {
                courseid: "MATH152",
                courseName: "Calculus II",
                blurb: "All about integrations.",
                highlights: [
                    `tackled integrations`,
                    `calculated the volume and surface area of arbitrary solids`,
                    `approximated difficult functions with Taylor series`,
                ],
                content: [`
                While the topics were more complex, I strangely found this to be a much easier time than MATH150. For one, the weekly quizzes were super easy - they usually just lifted one of the first 10 questions from each chapter, making it very easy to prepare. MATH150, on the other hand, would tweak a question much further down the chapter.<br/><br/>
                Integrations were very cool! As someone who's worked with CAD software for a while, it was a revelation to actually learn how to calculate a volume/surface from a given curve, instead of just chalking it up to computer magic.<br/><br/>
                I found convergence to be a little dull. A whole month was spent on learning various convergence testing techniques that weren't that difficult. Unlike with integrations, you don't get the satisfaction of being able to actually see the area you've computed. <br/><br/>
                Taylor series was something I only ever heard about in passing, and feared it being this abstract technical concept that didn't serve much practical purpose. I was pleasantly wrong! I thought it was super neat that you could approximate a curve just by using tangents, and there's genuine value in using them to speed up computation. <a href="https://www.youtube.com/watch?v=3d6DsjIBzJ4&pp=ygUSM2JsdWUxYnJvd24gdGF5bG9y">Watch 3Blue1Brown's beautiful video first</a>, then go to the textbook.<br/><br/>
                I do think I am ready for a break from calculus. While I won't be needing Calc III to graduate, If I get curious with multivariate stuff I may end up taking it.
                `
                ]
            },
            {
            courseid: "CMPT276",
                courseName: "Introduction to Software Engineering",
                blurb: "The future is terminal.",
                highlights: [
                    `developed an <a href="https://github.com/AntTracker/AntTracker">issue-tracking system in Kotlin</a>`,
                    `leveraged Exposed to interface the system with an H2 database`,
                    `had some fun times with my team!`
                ],
                content: [`
                A semester-long group project is a special circle of hell when you didn't plan your team well.<br/><br/>
                I was very fortunate to know some very talented, motivated classmates to form a team with. So we all came into this project super excited: designing an issue-tracking system that combined cool features across JIRA, GitLab, and Bitbucket.<br/><br/>
                But, it became a lot more about writing documentation: requirements, user manuals, test case reports, you name it. We had less than a month to write the program itself, so our feature list was scaled waaaaaaay back.<br/><br/>
                Our system, AntTracker, is an command-line issue-tracking system. Other semesters wrote cool web-apps or games, while we were stuck with the cold, dark world of terminal. I was a little disappointed, but with our group being the dream-team, we've managed to make the project a little more interesting.<br/><br/>
                Most groups used C++ or Java; we opted for Kotlin. We were all totally new to it (our professor's said several times this was an ill-advised idea), but as a C++ person, it was a good experience to change my usual approach. Kotlin's null-safety is pretty cool stuff.<br/><br/> 
                The professor wanted the persistent data was to be manually written in binary to individual files. This seemed silly as there are many plenty sensible alternatives. As such, we decided to use a local H2 database.<br/><br/>
                We went one step further and used an ORM <a href="https://jetbrains.github.io/Exposed/home.html">(Exposed)</a> to abstract the database transactions. While being proficient with SQL and DBA stuff, I had never used an ORM before, and I definitely had some hair-pulling moments learning its syntax and wishing we'd just use raw SQL instead. After conquering that hill, I see now why ORMs are great tools, especially for large-scale systems. What we didn't realize until it was too late, however, was that Exposed hadn't yet supported composite primary keys (<i>oops!</i>). <br/><br/>
                I believe the professor we had (Russell Tront) only teaches in the summer, so if you take this course during other semesters your experience will be <b>very different</b> from mine. If you do have him, be sure to use the Cornerstone Print Shop instead of the library! You'll save some cash.
                `
                ]
            },
            ]
    },
    {
    name: "Winter",
        courses: [
            {
            courseid: "MATH150",
                courseName: "Calculus I",
                blurb: "All about derivatives.",
                highlights: [
                    `tackled derivatives`,
                    `learned the Newton-Raphson method to solve optimization problems`,
                    `got fluent in math again!`
                ],
                content: [ `
                    Things don't really kick off in Calc I until the 2nd month where you learn about differentation rules. <br/><br/>
                    If you want to keep afloat, <b>keep practicing limits and differentation rules until they feel intuitive</b>. These are absolutely central to this course and MATH152 as well. The unit circle is also something you need to be proficient with, since you'll be dealing with trig functions whether you like it or not.<br/><br/>
                    At risk of sounding like a weirdo for enjoying the weekly tutorials, here's why I liked them:
                    <ol>
                    <li>They motivate you to study ahead to avoid looking stupid in front of your group. <i>Fear brings results!</i></li>
                    <li>You get time to <del>shit-talk</del> discuss the course with other students.</li>
                    </ol> 
                    <b>STUDY WELL,</b> so the tutorials become easy, meaning you'll have more bandwidth to socialize during them. This will then give you something to look forward to each week in a gauntlet of a course. If don't already have a friend in the class, it can otherwise become a very lonely semester struggling on your own.
                    `
                ]
            },
            {
            courseid: "CMPT404",
                courseName: "Cryptography",
                blurb: "The numbers Mason, what do they mean?",
                highlights: [
                    `bruteforced a DES-encryption to recover a PDF`,
                    `reverse-engineered the secret RSA exponent using Ext. Euclidean Algorithm`,
                    `performed a padding attack on SHA-256 `
                ],
                content: [`
                    For some odd reason, I thought the course would just be learning how to solve silly word-jumble problems. Although this actually was the case for the first couple of weeks, that all went out the window once we started learning about computational security. <br/><br/>
                    For the rest of the course, it became a mash of statistics, probability, discrete math, modular arithmetic, linear algebra, and really almost any conceivable area of math. Modern cryptography is all about difficult math problems and everyone's favourite: proofs!<br/><br/>
                    On top of that, there's a looooot of ciphers to learn. The supplied textbook was actually incomplete (and <b>very</b> difficult to read) so <a href="https://www.youtube.com/watch?v=FGhj3CGxl8I&pp=ygUaY29tcHV0ZXJwaGlsZSBjcnlwdG9ncmFwaHk%3D">go watch all the Computerphile videos first.</a><br/><br/>
                    <b>This course is HAAAARD</b>, but the hands-on exercises were actually really cool. Watching the terminal blitz through millions of DES keys? Straight out of the movies, man. I don't think I'll ever again reach the level of satisfaction from cracking the key after 4 hours.<br/><br/>
                    If you're up for a challenge, and want to de-mystify cryptography, this is worth taking.<br/><br/>
                    `
                ]
            },
            {
            courseid: "CMPT318",
                courseName: "Cybersecurity",
                blurb: "Sick AI vs. AI battles",
                highlights: [
                    `trained and optimized an HMM for anomaly detection`,
                    `feature-scaled and feature-engineered data for models`,
                    `learned the history and current landscape of the industry`,
                ],
                content: [
                    `
                    You're not going to learn how to pen-test the White House and appoint yourself as President.<br/>
                    You also won't be learning how to DIY ransomware to recover your tuition fees.<br/><br/>
                    But you will learn the answers to some questions of the industry, like how: 
                    <ul>
                    <li>has the threat landscape evolve over the years?</li>
                    <li>can you quantify risk?</li>
                    <li>could rising geo-political tensions lead to disruptions of critical infrastructure?</li>
                    </ul>
                    
                    The message of the course is this: <b>attacks are using machine learning and AI, defense needs to follow suit.</b><br/>
                    One approach, which we learned to do, is using a Hidden-Markov Model to perform anomaly detection.<br/><br/>
                    
                    If you take a home's power consumption data across 4 years, and during this period their IoT devices got injected with bitcoin miners, that extra processing power will manifest in increased power. Trying to pinpoint this yourself is a lot of work, and good luck deciding whether some power spike is normal behaviour or not. An anomaly-detection model can do this for you, in real-time. This is exactly what we learned to do, using R. Be warned however, that your group will do a presentation on your findings to the instructor.<br/><br/>
                    A good peek into the industry, with a healthy balance of theory and exercises.
                    `
                ]
            },
            {
            courseid: "CMPT295",
                courseName: "Introduction to Computer Systems",
                blurb: "Assembly is pretty cool actually?",
                highlights: [
                    `learned how to program in RISC-V`,
                    `maintained a RISC-V emulator in C`,
                    `calculated performance of L1/L2 caches`
                ],
                content: [
                    `
                    I was always curious about how assembly worked, but never got around to it during my Cognitive Science degree. After watching a bunch of videos about <a href="https://www.youtube.com/watch?v=dbYQOon4z84&pp=ygUXZGlzcGxhY2VkIGdhbWVzIHN0cmlkZXI%3D">programming quirks/bugs/features for NES games</a>, I decided now was the time to learn.<br/><br/>
                    My experience was unique in that my section only had about 10 students, and our instructor (Arrvindh Shriraman) taught us RISC-V instead of x86. This made the lectures a lot more worthwhile because we all felt comfortable asking questions, and boy we had lots of questions. Honestly a great time, and I was very surprised to see his RateMyProf page. <br/><br/>
                    The course will start off with a CMPT120-level review of binary. About the end of the 1st month is when you'll start getting into RISC-V. It gets dense quick! But if you can keep in mind how the hardware is made, you can work backwards into understanding why there's 32 registers, why instruction sizes are fixed, why there's no base instruction for Set Greater Than, and so on. In a program that's largely about software, this was a nice departure. <br/><br/>
                    The real meat-and-bones is in the later half of the course, where we learned about the actual layout of a RISC-V CPU, and how instructions are processed step-by-step. If the instruction format still seemed illogical to you, I think this unit will help make some sense of that. <br/><br/> 
                    For the final, make sure you're comfortable with caching questions and CPU pipelining. <br/><br/>
                    This course is definitely not everyone's cup of tea, but nevertheless important in understanding the hardware side of things.
                    `
                ]
            }
        ]
    }
]}
]

export default reflections;
