const reflections = [
{
year: 2025,
semesters : [
    {
        name: "Summer",
        courses: [
        {
            courseid: "CMPT493",
            courseName: "Digital Media Practicum",
            blurb: "Best 6 UD credits for your buck",
            highlights: [
                `Worked with Tidepool Games as my client`,
                `Created new gameplay features for an Unreal Engine 5 game`,
                `Befriended a bunch of developers, artists, and animators :)`
            ],
            content: [`
                test content...
            `]
        },
        {
            courseid: "CMPT376W",
            courseName: "Professional Responsibility and Technical Writing",
            blurb: "Those attendance marks really do count",
            highlights: [
                `A very light introduction into basic ethical theories`,
                `Wrote a paper examining AI and religion`,
                `Not much else!`
            ],
            content: [`
                I didn't expect a whole lot from this, as this is really one of two required W-credit courses and CS students aren't exactly known for being great writers. Given that the professor really emphasized ethics in the beginning of the course, I was hoping we'd have deeper discussions on controversial topics surrounding technology. For reference, when I took PSYC300W, the professor <i>encouraged</i> us to pick a stance and defend it, which I enjoyed as it made assignments a lot more interesting.<br/><br/>
                As for the ethical theories examined, it was very introductory level stuff with utilitarianism, kantianism, etc. Again, I imagine this class is probably the first time most of the students applied an ethical framework, but I was hoping we'd dig a little deeper into more modern ideas.<br/><br/>
                So, frankly not a whole lot to write about here. You take the course cause you need it to graduate. The workload is very light though, so you can definitely load up with other UD courses.
            `]
        }
        ]
    },
    {
        name: "Spring",
        courses: [
        {
            courseid: "CMPT461",
            courseName: "Computational Photography and Image Manipulation",
            blurb: "Absolutely worth the 8:30AM start time.",
            highlights: [
                `I'm presenting my semester project at SIGGRAPH!!!`,
                `Studied and implemented texture quilting and Poisson blending`,
                `Conducted a literature review on this rapidly-evolving field`
            ],
            content: [`
            The main draw for me was the term project: you were free to come up with some cool idea to investigate based on current research. The professor and TAs emphasized doing something interesting and novel, rather than just replicating existing research. These guys do some really cool work on <a href="https://yaksoy.github.io/themes/">image relighting and intrinsic decomposition</a> and it's not often you get to directly collaborate with leading figures in a research field. So, I knew I wanted my project to make use of their work in some form.<br/><br/>
            Now I am a big F1 fan and the 2025 season is one for the history books: Lewis Hamilton, the most recognized F1 driver in the roster, has been courted by Ferrari with $400M to drive for them. After a 16 year drought, Ferrari might finally bag that win.<br/><br/>
            What does this have to do with image manipulation? Well, Ferrari's livery for the 2025 season sports the usual passionate shade of red, and of course it features a slew of sponsor logos. However, their title sponsor HP seems to have gotten an unusual amount of attention over their branding:<br/><br/>
            <img src="misc/ferrarihp.png"></img><br/><br/>
            Personal preferences aside, this got me thinking of how sponsor logos could be digitally applied onto complex surfaces such as an F1 car. Imagine if we could take a blank car, and start applying a bunch of our own logo PNG files such that the applied logos:
            <ol>
            <li>Conform onto the surface being applied onto</li>
            <li>Respect the lighting conditions present in the base image of the car</li>
            </ol>
            Of course, I realized that intrinsic decomposition is the exact technique to resolve the 2nd condition! Isolate the albedo layer from your base image, do whatever manipulations you'd like, and then recompose any shading layers to get an image edit with consistent lighting. In layman's terms, you can imagine we're "re-taking" the photo under the original lighting conditions, with our logos now present in the scene. This was a great use case for the work professor Aksoy and Chris Careaga has done.<br/><br/>
            Now onto the 1st condition: surface geometry. We're incredibly blessed to have excellent geometry-estimation tools ready to be used, and for this project MoGe seemed like a good fit. It produces reliable estimations, doesn't take forever to run, and featuers a very approachable Python API. What MoGe will do is given some image, it will estimate the 3-dimensional geometry and produce a point cloud of the scene, which can then be converted into a mesh. <br/><br/>
            So the process became quite straightforward:
            <ol>
            <li>Given some input image, produce the mesh of the estimated geometry.</li>
            <li>Apply our desired logo onto said mesh using texture mapping.</li>
            <li>Decompose the albedo and shading layers from the input image.</li>
            <li>Write the logo layer from 2. on top of the albedo layer from 3.</li>
            <li>Recombine albedo and shading layers.</li>
            <li>Voila!</li>
            </ol>
            I must say, the results are quite something. Here's an example of it in action:<br/><br/>
            <img src="misc/ferrari_result.png" style="width: 100%"></img><br/><br/>
            Despite the many doubts I had over the semester, the project ended up a great success. It opened my eyes on the kinds of image editing techniques that are now possible with bleeding-edge tech. What I wasn't expecting was that SIGGRAPH would also find this valuable: I'm going to be presenting this project at the 2025 conference! At the start of the semester I thought this was beyond a remote possibility, but now it's happning for real. All the hair-pulling moments and stress-induced 1:00AM nights was not for naught after all!<br/><br/>
            When presentation materials will be finalized I will be sure to share them here. If you are attending SIGGRAPH 2025, do stop by to say hello!<br/><br/>
            As for advice on this course, what you get is <b>entirely dependent on you.</b> If you're at all not confident in programming, reading papers, or keeping a consistent work ethic, you're likely going to find yourself suffering through a project you either don't find interesting, or feel way out of your depth trying to implement. As someone who's been there before, it's a highly unpleasant place to be in. <b>Absolutely do not commit to this course on a whim.</b><br/><br/>
            But if you do decide to take this course, spend extra time on project direction. Focus on what you find cool, because your personal interests are what keeps the project engaging through the inevitable rough patches.
            `]
        },
        {
            courseid: "CMPT466",
            courseName: "Animation",
            blurb: "Numbers! It's all numbers!",
            highlights: [
                `Quaternions!`,
                `Robotics!`,
                `Deep Reinforcement Learning!`
            ],
            content: [`
            When I heard they were dropping the MACM316 pre-requisite for this course I was a little concerned the syllabus would get watered down.<br/><br/>
            <b>Boy was I wrong!</b><br/><br/>
            Sure it starts off with how splines are computed, which I already got plenty of experience from MACM316, but as soon as we got into rotation interpolation we just dived right into quaternion algebra. Now I had worked with quaternions before desining VR experiments in Unity for the SFU Cogsci Lab, but I sure never understood what quaternions were actually doing, just convert Euler rotations to quaternions, call some functions, and convert back to Euler if neccessary. This time, I sat down and went through a bunch of material on quaternions: why they exist, why they have 3 imaginary and 1 real component, and why they are useful for interpolations.<br/><br/>
            I can tell you how the algebra works, but quaternions still escape my understanding.<br/><br/>
            Then we got into kinematics. Forward kinematics was surprisingly straight forward; it's really just some basic trignometry and matrix multiplication. Inverse kinematics is where things get quite interesting. It's quite handy for VR since you can estimate where an avatar's arm should be, and how it should be contorted, based on the position and rotation of the hands. How this estimation works can get quite hairy real fast with partial derivatives and matrix inversion, and the more advanced versions get into optimization. You can definitely spend a whole semester on IK alone. <br/><br/>
            The physics-based animation section was quite interesting: how do you define a model of the world that can accurately, yet efficiently capture behaviour in nature? I sure got flashbacks to highschool physics when we got into mass-spring systems to simulate cloth physics. Sure it's not exactly ground-breaking stuff these days, but it was a big deal when games like Splinter Cell started featuring these concepts in real-time. Our professor also showed a lot of her work on physics-based character animation, and the tracking capabilities were quite impressive: a running animation could recover and resume naturally after receiving a basketball to the face!<br/><br/>
            The really cool part was learning how deep-learning offers solutions to animation. For the last assignment, we got to train an agent to learn how to walk using Unity's ml-agents package. We had to come up with our own reward scheme and see how it panned out after hours of training. At first, I came up with a bunch of different rewards based on what I thought one needs to learn in order to walk, but I quickly realized that simple tends to work best. After days of bizzarre contortions and gyrations, seeing it actually walk around was quite the reward. It does get me curious on what else I could train the agent to do. Maybe even get it to ollie?<br/><br/>
            Definitely math-heavy, but lots of very cool applications of the concepts learned in your math courses.
            `]
        },
        {
            courseid: "CMPT201",
            courseName: "Systems Programming",
            blurb: "Your gateway drug to UNIX enlightenment",
            highlights: [
                `Learned the wonders of POSIX programming`,
                `Reinforced my experience in using build systems`,
                `Reading man pages!`
            ],
            content: [`
            I will admit I have a particular fondness for C. Its relative barebones-ness and all the footguns makes C programming like wielding ancient magic: it'll do some cool things for you, but you best be careful. Perhaps that is also why I have a fascination for Linux.<br/><br/>
            Much to my delight, this course was entirely about C and Linux: low-level programming that directly interacts with your hardware and OS. We learned about the various POSIX syscalls, and how they can be used as building blocks to create complex programs. The first assignment was writing your own shell program! How cool is that?<br/><br/>
            Unique to this class is the enforcement of neovim for all programming assignments. I had some prior experience but nothing beyond knowing how to get in and out of insert mode. This restriction encouraged you to use shortcuts and macros to optimize your writing, and I really appreciated it! I find myself reaching for neovim now to write lecture notes.<br/><br/>
            The course runs the whole gamut with multithreading, file IO, socket programming, you name it! The workload ended up being much higher than many of the 300-level courses I had taken, but I really felt like I was learning. Props to Dr. Fraser for having the best lectures one could ask for. Definitely GOAT status.<br/><br/>
            And what will I do now with this knowledge? For one thing, I definitely want to take the Embedded Programming course. But what about right now? Maybe I dabble a little in working with drivers, for example. Who knows? The hardware world is now my oyster.
            `]
        }
        ]
    }
]
},
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
            The first brain-exploding moment was probably seeing why aliasing occurs. I had already learned about aliasing in CMPT365 (Multimedia Systems), but not by seeing it through the frequency domain. Once I got a grasp on how signal manipulation in the spatial domain affects its frequency domain representation, things just clicked together so beautifully! I'm definitely keen on learning more about working with Fourier transforms.<br/><br/>
            The really amazing thing was being able to create powerful vision tools from very simple building blocks. Who would've thought that all it took to create an edge-detection tool was some derivative information and a little trignometry?<br/><br/>
            What <i>really</i> piqued my interest was seeing how my previous Cognitive Science education could be applied to this field. If you're trying to model human vision, you should account for the components that allow for <b>sensation</b> (eyes, retina, rod/cones, etc.) To make a better model, you should also account for <b>perception</b>; for example, how do we:
            <ul>
            <li>pick out important features from an image?</li>
            <li>get the environmental context of an image just from looking at it?</li>
            <li>rectify visual information from both eyes into a single image?</li>
            </ul>
            These are but a few of the questions one studies in Cognitive Science, and I was pleased to see that even in a technical field like Computer Vision, these were important considerations.<br/><br/>
            After the midterm, the course focused on Computer Graphics. I didn't find this section as challenging as Computer Vision, but it was interesting to see it as the "inverse problem" of vision, and how the rasterization process works. Going through shading models step-by-step, from Lambertian diffusion to Blinn-Phong specular shading, was a fun way to learn the various challenges in understanding light. Now, I'll find myself looking at something in real-life and trying to pick apart how exactly it's being lit.<br/><br/>
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
            It's one thing to solve a math problem using pen and paper. It's another thing to get a computer to do it for you <b>reliably</b>. This was the message of the course: <i>"If you don't want silly results, you really need to know what the computer is doing."</i><br/><br/>
            Turns out, if I wanted to program my own matrix solver, I can't just write the Gaussian elimination algorithm from MATH232 (Applied Linear Algebra) and call it a day. For one, doing anything with floats necessitates the thought, <i>"Is the equation I am implementing robust?"</i> It's not just considering over/under-flows either; here's a classic example.<br/><br/>
            Programming the quadratic formula as taught in high-school is a <b>complete trap</b>: round-off errors will lead to totally incorrect solutions. To minimize this, you want to make an extra version of the formula with the numerator rationalized, then your program needs to be smart enough know which formula variant to use depending on the situation. For such a simple equation, things are not so straightforward.<br/><br/>
            Here's the equation for the first root as taught in high-school (left) and with the numerator rationalized (right). These are equivalent expressions:<br/><br/>
            <img src="misc/quad1.png" width=300 height=82 style="margin:0 auto"></img>
            <img src="misc/quad2.png" width=300 height=82 style="margin:0 auto"></img>
            <br/><br/>
            All that matters is what gets added to <math display="inline"><mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mrow><mn>4</mn><mi>a</mi><mi>c</mi></mrow></mrow></msqrt></mrow></math> : 
            <math display="inline"><mrow><mo>-</mo><mi>b</mi></mrow></math> for the high-school formula, and 
            <math display="inline"><mrow><mo>+</mo><mi>b</mi></mrow></math> for the rationalized variant.<br/><br/>
            One of these variants will become a subtraction, depending on the sign of <math display="inline"><mrow><mi>b</mi></mrow></math>, and this is the crux of the trap: <b>subtractive cancellation</b>, where you're subtracting two near-equal numbers of similar magnitude. Unlike your typical rounding error where least-significant digits are affected and thus may be excused, <b>subtractive cancellation impacts the most significant digits!</b><br/><br/>
            Imagine <math display="inline"><mrow><mi>b</mi></mrow></math> as 2.491029 and <math display="inline"><mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mrow><mn>4</mn><mi>a</mi><mi>c</mi></mrow></mrow></msqrt></mrow></math> as 2.491027, both with <b>7</b> significant digits. Subtracting these values gives 0.000002 with just a single significant digit; that is <b>6</b> significant digits we've lost and can no longer recover. (Notice we've only kept the least significant digit.)
            <br/><br/>
            Of course there are other sources of error one needs to consider, but this page is long enough already. After all this trouble, you still need to consider the whole algorithm you are basing your program on. In CS, you're always trying to prove the efficiency of an algorithm, but for this course, you're proving the amount of error an algorithm will induce. If you don't have hard evidence of some error baseline, how can anyone trust your program? Going one level deeper, you might even consider how much accuracy you're willing to sacrifice to improve the efficiency of your program.<br/><br/>
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
            You really do appreciate the Internet (enough to capitalize it) when you realize the amount of work required to send just one packet over a network: it gets bundled into a TCP segment with connection-specific information, which gets bundled into a datagram containing IP data, which is then finally contained within a frame to be sent "over the wire". Then, when it reaches its destination, all those layers get unpacked and processed one-by-one before the other computer can actually read your message! This isn't even considering connection establishment, encryption, corruption-handling, authentication, network congestion, etc. It's a miracle how smooth things are, and being able to build those components yourself in Python is very rewarding.<br/><br/>
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
                Taylor series was something I only ever heard about in passing, and feared it being this abstract technical concept that didn't serve much practical purpose. I was pleasantly wrong! I thought it was super neat that you could approximate a curve just by using tangents, and there's genuine value in using them to speed up computation. <a href="https://www.youtube.com/watch?v=3d6DsjIBzJ4&pp=ygUSM2JsdWUxYnJvd24gdGF5bG9y">Watch 3Blue1Brown's video first</a>, then go to the textbook.<br/><br/>
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
                A semester-long group project is a special circle of hell when you don't plan your team well.<br/><br/>
                I was fortunate to know some very talented, motivated classmates to form a team with. So we all came into this project super excited: designing an issue-tracking system that combined cool features across JIRA, GitLab, and Bitbucket.<br/><br/>
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
    name: "Spring",
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
