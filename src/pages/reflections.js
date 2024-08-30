const reflections = [
{
year: 2024,
semesters : [ 
    {
        name: "Summer",
            courses: [
            {
                courseid: "MATH152",
                courseName: "Calculus II",
                blurb: "All about integrations.",
                content: [`
                While the topics were more complex, I strangely found this to be a much easier time than MATH150. For one, the weekly quizzes were super easy - they usually just lifted one of the first 10 questions from each chapter, making it very easy to prepare. MATH150, on the other hand, would tweak a question much further down the chapter.<br/><br/>
                Integrations were very cool! As someone who's worked with CAD software for a while, it was a revelation to actually learn how to calculate a volume/surface from a given curve, instead of just chalking it up to computer magic.<br/><br/>
                I found convergence to be a little dull. A whole month was spent on learning various convergence testing techniques that weren't that difficult. Unlike with integrations, you don't get the satisfaction of being able to actually see the area you've computed. <br/><br/>
                Taylor series was something I only ever heard about in passing, and feared it being this abstract technical concept that didn't serve much practical purpose. I was pleasantly wrong! I thought it was super neat that you could approximate a curve just by using tangents, and there's genuine value in using them to speed up computation. <b>Watch 3Blue1Brown's videos on Taylor series first</b>, then go to the textbook. <br/><br/>
                I do think I am ready for a break from calculus. While I won't be needing Calc III to graduate, I get curious with multivariate stuff I may end up taking it.
                `
                ]
            },
            {
            courseid: "CMPT276",
                courseName: "Introduction to Software Engineering",
                blurb: "The future is terminal.",
                content: [`
                I came into this course super excited: I had an all-star group lined up early, we were going to make an issue-tracking system, it was going to be great! But the course ended up being a lot more about writing documentation: requirements, user manuals, test case reports, you name it. We actually had less than a month to write the program itself. <br/><br/>
                Our system, AntTracker, is an command-line issue-tracking system. Yep! While other semesters wrote web-apps or games, we were stuck with the terminal. I won't lie and say I wasn't a little disappointed, but as a group, we've managed to turn the project into something a little more worthwhile. <br/><br/>
                For one, we used Kotlin, which none of us had ever used before. A bit of a brave decision, especially with the professor's recommendation NOT to use unfamiliar tools for a bigger project, but I believe school is exactly the time to learn new things. As a C++ person, it was cool to learn some of the benefits Kotlin offers, such as it's approach on null-safety. <br/><br/>
                Two, the professor wanted the IO for the persistent data was to be manually written to individual files, which seemed silly as there are many alternatives used in the industry. As such, we decided to use a local H2 database. <br/><br/>
                And three, we went one step further and used an ORM <a href="https://jetbrains.github.io/Exposed/home.html">(Exposed)</a> to abstract the database transactions. While being proficient with SQL and DBA stuff, I had never used an ORM before, and I definitely had some hair-pulling moments trying to understand it's syntax and wishing we'd just use raw SQL instead. But after getting to grips with it, I see now why ORMs are great tools, especially for large-scale systems. What we didn't realize until it was too late, however, was that Exposed hadn't yet supported composite primary keys (oops!). <br/><br/>
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
                content: [ `
                    Things don't really kick off in Calc I until the 2nd month where you learn about differentation rules. <br/><br/>
                    If you want to keep afloat, <b>keep practicing limits and differentation rules until they feel intuitive</b>. These are absolutely central to this course and MATH152 as well. The unit circle is also something you need to be proficient with, since you'll be dealing with trig functions whether you like it or not.<br/><br/>
                    At risk of sounding like a weirdo for enjoying the weekly tutorials, here's why I liked them:
                    <ol>
                    <li>They motivate you to study ahead to avoid looking stupid in front of your group. <i>Fear brings results!</i></li>
                    <li>You get time to <del>shit-talk</del> discuss the course with other students.</li>
                    </ol> 
                    If don't already have a friend in the class, it can become a very lonely semester as it's all about study habits.<br/>
                    So if study well to make the tutorials easy, you'll have more bandwidth to socialize, and there will be something to look forward to each week in a gauntlet of a course. Nothing's better than feeling like you've already mastered a topic ahead of everyone else.
                    `
                ]
            },
            {
            courseid: "CMPT404",
                courseName: "Cryptography",
                blurb: "The numbers Mason, what do they mean?",
                content: [
                    `
                    For some odd reason, I thought the course would just be learning how to solve silly word-jumble problems. Although this actually was the case for the first couple of weeks, that all went out the window once we started learning about computational security. <br/><br/>
                    For the rest of the course, it became a mash of statistics, probability, discrete math, modular arithmetic, linear algebra, and really almost any conceivable area of math. Modern cryptography is all about difficult math problems.<br/><br/>
                    On top of that, there's a looooot of ciphers to learn. The supplied textbook was actually incomplete (and <b>very</b> difficult to read) so go watch the Computerphile videos on YouTube about all the different ciphers.<br/><br/>

                    <b>This course is hard</b>, but the hands-on exercises were actually really cool. We got to learn how to bruteforce a DES-encryption, reverse-engineer a RSA secret exponent, and a perform a padding attack. Watching the terminal blitz through millions of DES keys? Straight out of the movies, man. I don't think I'll ever again reach the level of satisfaction from cracking the key after 4 hours. If you're up for a challenge, and want to de-mystify cryptography, this is worth taking. <br/><br/>
                    If Hudson had learned some cryptography, it would've saved a lot of time.
                    `
                ]
            },
            {
            courseid: "CMPT318",
                courseName: "Special Topics - Cybersecurity",
                blurb: "Sick AI vs. AI battles",
                content: [
                    `
                    You're not going to learn how to pen-test the White House and discover they have alien janitors.<br/>
                    You also won't be learning how to DIY ransomware to recover your tuition fees.<br/><br/>
                    But you will learn the answers to some questions of the industry, like how: 
                    <ul>
                    <li>has the threat landscape evolve over the years?</li>
                    <li>can you quantify risk?</li>
                    <li>could rising geo-political tensions lead to disruptions of critical infrastructure?</li>
                    <li>can statistics help us?</li>
                    </ul>
                    
                    The overall message of the course is that with attacks now implementing machine learning and AI, defense needs to follow suit. One approach, which we learned to do, is using a Hidden-Markov Model to perform anomaly detection. <br/><br/>
                    
                    If you take a home's power consumption data across 4 years, and during this period their IoT devices got injected with bitcoin miners, that extra processing power will manifest in increased power. Trying to pinpoint this yourself is a lot of work, and good luck deciding whether some power spike is normal behaviour or not. An anomaly-detection model can do this for you, in real-time. Using R, we did exactly this and tuned our HMM model to extract the best performance. Along the way, we learned how to perform feature-scaling, feature-engineering, and principal-component analysis. Be warned however, that your group will do a presentation on your findings to the instructor. <br/><br/>

                    A good peek into the industry, with a healthy balance of theory and exercises.
                    `
                ]
            },
            {
            courseid: "CMPT295",
                courseName: "Introduction to Computer Systems",
                blurb: "Assembly is pretty cool actually?",
                content: [
                    `
                    I was always curious about how assembly worked, but never got around to it during my Cognitive Science degree. After watching a bunch of videos about the quirks of the 6502 CPU, I decided now was the time to learn. <br/><br/>
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
