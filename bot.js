const express = require('express');
const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========== COMPLETE ENGLISH LEARNING BOT CLASS ==========
class EnglishLearningBot {
    constructor() {
        this.users = new Map();
        this.lessons = this.createLessons();
        this.lessonKeywords = this.createLessonKeywords();
        this.totalMainLessons = 23;
    }

    createLessonKeywords() {
        return {
            // Core Lessons 1-5
            'alphabet': 1, 'letters': 1, 'vid1': 1,
            'subject': 2, 'subject pronouns': 2, 'i you he': 2, 'vid2': 2,
            'object': 3, 'object pronouns': 3, 'me you him': 3, 'vid3': 3,
            'verb to be': 4, 'am is are': 4, 'vid4': 4,
            'numbers': 5, 'counting': 5, 'vid5': 5,
            
            // Lessons 6-10
            'possessive adjective': 6, 'my your his': 6, 'vid6': 6,
            'possessive pronouns': 7, 'mine yours his': 7, 'vid7': 7,
            'demonstrative adjective': 8, 'this that these': 8, 'vid8': 8,
            'demonstrative pronouns': 9, 'this that these those': 9, 'vid9': 9,
            'reflexive': 10, 'myself yourself': 10, 'vid10': 10,
            
            // Lessons 11-15
            'verb to be tenses': 11, 'am was will': 11, 'vid11': 11,
            'days': 12, 'week': 12, 'monday sunday': 12, 'vid12': 12,
            'to be to do': 13, 'being been doing done': 13, 'vid13': 13,
            'articles': 14, 'a an the': 14, 'vid14': 14,
            'i me my': 15, 'i me my mine': 15, 'vid15': 15,
            
            // Lessons 16-20
            'you your': 16, 'you you your': 16, 'vid16': 16,
            'he him his': 17, 'he his him': 17, 'vid17': 17,
            'she her': 18, 'she her her': 18, 'vid18': 18,
            'it its': 19, 'it it its': 19, 'vid19': 19,
            'we us our': 20, 'we our us': 20, 'vid20': 20,
            
            // Lessons 21-23
            'they them their': 21, 'they their them': 21, 'vid21': 21,
            'questions': 22, 'negatives': 22, 'question negative': 22, 'vid22': 22,
            'modal verbs': 23, 'auxiliary': 23, 'can will must': 23, 'vid23': 23,
            
            // Revision sessions
            'revision 1': 24, 'review 1': 24, 'test 1': 24,
            'revision 2': 25, 'review 2': 25, 'test 2': 25,
            'revision 3': 26, 'review 3': 26, 'test 3': 26,
            'final revision': 27, 'final test': 27, 'exam': 27
        };
    }

    createLessons() {
        return {
            // ========== CORE LESSONS 1-5 ==========
            1: [ // Alphabet - CLEAR questions
                { question: "🔤 Which letter comes immediately after 'A' in the alphabet?", answer: "b" },
                { question: "🔤 Which letter comes right after 'B'?", answer: "c" },
                { question: "🔤 Which letter comes directly before 'D'?", answer: "c" },
                { question: "🔤 Which single letter is between 'E' and 'G'?", answer: "f" },
                { question: "🔤 What is the very first letter of the English alphabet?", answer: "a" },
                { question: "🔤 What is the final letter of the alphabet?", answer: "z" },
                { question: "🔤 Which letter comes after 'X' in alphabetical order?", answer: "y" }
            ],
            2: [ // Subject Pronouns - CLEAR context
                { question: "👤 Complete: ___ am studying English right now", answer: "i" },
                { question: "👤 ___ is playing football in the park", answer: "he" },
                { question: "👤 ___ is teaching the class today", answer: "she" },
                { question: "👤 ___ are going to the cinema together", answer: "we" },
                { question: "👤 ___ are waiting for the bus over there", answer: "they" },
                { question: "👤 ___ is raining outside right now", answer: "it" },
                { question: "👤 ___ are doing a great job with your studies", answer: "you" }
            ],
            3: [ // Object Pronouns - SPECIFIC context
                { question: "🎯 Sarah gave the book to ___ (referring to yourself)", answer: "me" },
                { question: "🎯 I saw John yesterday and waved to ___", answer: "him" },
                { question: "🎯 Please tell ___ the truth about what happened", answer: "me" },
                { question: "🎯 We called our friends and invited ___ to the party", answer: "them" },
                { question: "🎯 He helped all of ___ with our homework", answer: "us" },
                { question: "🎯 I really like Maria and enjoy talking to ___", answer: "her" },
                { question: "🎯 Look at that beautiful painting - admire ___", answer: "it" }
            ],
            4: [ // Verb To Be - CLEAR context
                { question: "🔄 Right now, I ___ feeling very happy", answer: "am" },
                { question: "🔄 She ___ working as a doctor at the hospital", answer: "is" },
                { question: "🔄 They ___ studying English in this classroom", answer: "are" },
                { question: "🔄 We ___ best friends since childhood", answer: "are" },
                { question: "🔄 He ___ very tall for his age", answer: "is" },
                { question: "🔄 It ___ getting dark outside now", answer: "is" },
                { question: "🔄 You ___ doing excellent work in this course", answer: "are" }
            ],
            5: [ // Numbers 1-1000 - CLEAR format
                { question: "🔢 Write the number 25 in words", answer: "twenty five" },
                { question: "🔢 Write the number 100 in words", answer: "one hundred" },
                { question: "🔢 Write the number 999 in words", answer: "nine hundred ninety nine" },
                { question: "🔢 Write the number 50 in words", answer: "fifty" },
                { question: "🔢 Write the number 750 in words", answer: "seven hundred fifty" },
                { question: "🔢 Write the number 300 in words", answer: "three hundred" },
                { question: "🔢 Write the number 1000 in words", answer: "one thousand" }
            ],

            // ========== LESSONS 6-10 ==========
            6: [ // Possessive Adjectives - CLEAR context
                { question: "📝 This is ___ English book that I bought yesterday", answer: "my" },
                { question: "📝 Is that ___ car parked outside?", answer: "your" },
                { question: "📝 This is ___ house on the corner", answer: "his" },
                { question: "📝 That is ___ bag on the chair", answer: "her" },
                { question: "📝 This is ___ school where we study", answer: "our" },
                { question: "📝 That is ___ garden with the beautiful flowers", answer: "their" },
                { question: "📝 The cat is washing ___ face with its paw", answer: "its" }
            ],
            7: [ // Possessive Pronouns - CLEAR context
                { question: "📝 This English book is ___ (it belongs to me)", answer: "mine" },
                { question: "📝 That red car is ___ (it belongs to you)", answer: "yours" },
                { question: "📝 The big house is ___ (it belongs to him)", answer: "his" },
                { question: "📝 This handbag is ___ (it belongs to her)", answer: "hers" },
                { question: "📝 The school building is ___ (it belongs to us)", answer: "ours" },
                { question: "📝 That beautiful garden is ___ (it belongs to them)", answer: "theirs" },
                { question: "📝 This seat here is ___ (it's reserved for you)", answer: "yours" }
            ],
            8: [ // Demonstrative Adjectives - CLEAR proximity
                { question: "👉 ___ book right here is very interesting", answer: "this" },
                { question: "👉 ___ books on this table are quite heavy", answer: "these" },
                { question: "👉 ___ car over there is very fast", answer: "that" },
                { question: "👉 ___ houses across the street are very big", answer: "those" },
                { question: "👉 ___ phone in my hand is mine", answer: "this" },
                { question: "👉 ___ dogs in that yard are very friendly", answer: "those" },
                { question: "👉 ___ student at the back of the class is very smart", answer: "that" }
            ],
            9: [ // Demonstrative Pronouns - CLEAR context
                { question: "👉 ___ is my favorite English book", answer: "this" },
                { question: "👉 ___ are my best friends from school", answer: "these" },
                { question: "👉 ___ is your car parked outside", answer: "that" },
                { question: "👉 ___ are their new houses on the hill", answer: "those" },
                { question: "👉 ___ food here is absolutely delicious", answer: "this" },
                { question: "👉 ___ shoes in the window are very expensive", answer: "those" },
                { question: "👉 ___ math problem is quite difficult to solve", answer: "that" }
            ],
            10: [ // Reflexive Pronouns - CLEAR actions
                { question: "🔄 I accidentally cut ___ while cooking", answer: "myself" },
                { question: "🔄 She taught ___ to play the piano", answer: "herself" },
                { question: "🔄 He built the entire house by ___", answer: "himself" },
                { question: "🔄 We really enjoyed ___ at the party", answer: "ourselves" },
                { question: "🔄 They prepared ___ for the difficult exam", answer: "themselves" },
                { question: "🔄 You should believe in ___ and your abilities", answer: "yourself" },
                { question: "🔄 The cat is cleaning ___ with its tongue", answer: "itself" }
            ],

            // ========== LESSONS 11-15 ==========
            11: [ // Verb To Be Tenses
                { question: "⏰ I ___ happy now (present)", answer: "am" },
                { question: "⏰ She ___ here yesterday (past)", answer: "was" },
                { question: "⏰ They ___ late tomorrow (future)", answer: "will be" },
                { question: "⏰ We ___ students (present)", answer: "are" },
                { question: "⏰ He ___ sick last week (past)", answer: "was" },
                { question: "⏰ I ___ there soon (future)", answer: "will be" },
                { question: "⏰ It ___ cold now (present)", answer: "is" }
            ],
            12: [ // Days of the Week
                { question: "📅 Day after Monday?", answer: "tuesday" },
                { question: "📅 Day before Sunday?", answer: "saturday" },
                { question: "📅 First day of week?", answer: "monday" },
                { question: "📅 Day between Tuesday and Thursday?", answer: "wednesday" },
                { question: "📅 Day after Friday?", answer: "saturday" },
                { question: "📅 Weekend days?", answer: "saturday sunday" },
                { question: "📅 Middle day of week?", answer: "wednesday" }
            ],
            13: [ // To Be & To Do
                { question: "🔄 I have ___ waiting", answer: "been" },
                { question: "🔄 She is ___ her homework", answer: "doing" },
                { question: "🔄 He has ___ his work", answer: "done" },
                { question: "🔄 They are ___ students", answer: "being" },
                { question: "🔄 We have ___ our best", answer: "done" },
                { question: "🔄 You are ___ great", answer: "being" },
                { question: "🔄 I am ___ dinner", answer: "doing" }
            ],
            14: [ // Articles
                { question: "📖 I saw ___ elephant", answer: "an" },
                { question: "📖 ___ sun is bright", answer: "the" },
                { question: "📖 She has ___ apple", answer: "an" },
                { question: "📖 ___ moon is beautiful", answer: "the" },
                { question: "📖 He is ___ honest man", answer: "an" },
                { question: "📖 ___ Earth is round", answer: "the" },
                { question: "📖 I need ___ pen", answer: "a" }
            ],
            15: [ // I/Me/My
                { question: "👤 ___ am learning (subject)", answer: "i" },
                { question: "👤 She told ___ (object)", answer: "me" },
                { question: "👤 This is ___ book (possessive)", answer: "my" },
                { question: "👤 ___ like English", answer: "i" },
                { question: "👤 Give it to ___", answer: "me" },
                { question: "👤 That is ___ car", answer: "my" },
                { question: "👤 ___ and John are friends", answer: "i" }
            ],

            // ========== LESSONS 16-20 ==========
            16: [ // You/You/Your
                { question: "👤 ___ are nice (subject)", answer: "you" },
                { question: "👤 I see ___ (object)", answer: "you" },
                { question: "👤 Is this ___ pen? (possessive)", answer: "your" },
                { question: "👤 ___ speak well", answer: "you" },
                { question: "👤 I help ___", answer: "you" },
                { question: "👤 That is ___ book", answer: "your" },
                { question: "👤 ___ are smart", answer: "you" }
            ],
            17: [ // He/His/Him
                { question: "👤 ___ is tall (subject)", answer: "he" },
                { question: "👤 That is ___ book (possessive)", answer: "his" },
                { question: "👤 I called ___ (object)", answer: "him" },
                { question: "👤 ___ runs fast", answer: "he" },
                { question: "👤 This is ___ car", answer: "his" },
                { question: "👤 She likes ___", answer: "him" },
                { question: "👤 ___ is my brother", answer: "he" }
            ],
            18: [ // She/Her/Her
                { question: "👤 ___ is smart (subject)", answer: "she" },
                { question: "👤 I see ___ (object)", answer: "her" },
                { question: "👤 That is ___ bag (possessive)", answer: "her" },
                { question: "👤 ___ sings well", answer: "she" },
                { question: "👤 He helps ___", answer: "her" },
                { question: "👤 This is ___ house", answer: "her" },
                { question: "👤 ___ is a doctor", answer: "she" }
            ],
            19: [ // It/It's/Its
                { question: "👤 ___ is raining", answer: "it" },
                { question: "👤 I see ___", answer: "it" },
                { question: "👤 The dog ate ___ food", answer: "its" },
                { question: "👤 ___ is cold today", answer: "it" },
                { question: "👤 The cat washed ___ face", answer: "its" },
                { question: "👤 ___ is time to go", answer: "it" },
                { question: "👤 The tree lost ___ leaves", answer: "its" }
            ],
            20: [ // We/Our/Us
                { question: "👥 ___ are friends (subject)", answer: "we" },
                { question: "👥 This is ___ house (possessive)", answer: "our" },
                { question: "👥 She told ___ (object)", answer: "us" },
                { question: "👥 ___ learn English", answer: "we" },
                { question: "👥 That is ___ car", answer: "our" },
                { question: "👥 He helps ___", answer: "us" },
                { question: "👥 ___ are students", answer: "we" }
            ],

            // ========== LESSONS 21-23 ==========
            21: [ // They/Their/Them
                { question: "👥 ___ are coming (subject)", answer: "they" },
                { question: "👥 That is ___ house (possessive)", answer: "their" },
                { question: "👥 I see ___ (object)", answer: "them" },
                { question: "👥 ___ are happy", answer: "they" },
                { question: "👥 This is ___ book", answer: "their" },
                { question: "👥 She knows ___", answer: "them" },
                { question: "👥 ___ are my friends", answer: "they" }
            ],
            22: [ // Questions & Negatives
                { question: "❓ ___ you like coffee? (do/does)", answer: "do" },
                { question: "❓ I ___ like tea (negative)", answer: "don't" },
                { question: "❓ ___ she speak English? (do/does)", answer: "does" },
                { question: "❓ He ___ play football (negative)", answer: "doesn't" },
                { question: "❓ ___ they live here? (do/does)", answer: "do" },
                { question: "❓ We ___ understand (negative)", answer: "don't" },
                { question: "❓ ___ it work? (do/does)", answer: "does" }
            ],
            23: [ // Auxiliary & Modal Verbs
                { question: "🔧 I ___ speak English (can/could)", answer: "can" },
                { question: "🔧 You ___ study now (should/shall)", answer: "should" },
                { question: "🔧 She ___ come tomorrow (may/might)", answer: "may" },
                { question: "🔧 We ___ help you (can/could)", answer: "can" },
                { question: "🔧 They ___ arrive late (may/might)", answer: "might" },
                { question: "🔧 He ___ finish his work (must/have to)", answer: "must" },
                { question: "🔧 I ___ go now (have to/must)", answer: "have to" }
            ],

            // ========== REVISION SESSIONS ==========
            24: this.createRevisionQuestions(1, 8),   // Lessons 1-8
            25: this.createRevisionQuestions(9, 16),  // Lessons 9-16
            26: this.createRevisionQuestions(17, 23), // Lessons 17-23
            27: this.createRevisionQuestions(1, 23)   // All lessons
        };
    }

    createRevisionQuestions(startLesson, endLesson) {
        if (startLesson === 1 && endLesson === 8) {
            // Revision 1: Lessons 1-8 - 10 questions
            return [
                { question: "🔤 Which letter comes immediately after 'A' in the alphabet?", answer: "b", lesson: 1 },
                { question: "👤 Complete: ___ am studying English right now", answer: "i", lesson: 2 },
                { question: "🎯 Sarah gave the book to ___ (referring to yourself)", answer: "me", lesson: 3 },
                { question: "🔄 Right now, I ___ feeling very happy", answer: "am", lesson: 4 },
                { question: "🔢 Write the number 25 in words", answer: "twenty five", lesson: 5 },
                { question: "📝 This is ___ English book that I bought yesterday", answer: "my", lesson: 6 },
                { question: "📝 This English book is ___ (it belongs to me)", answer: "mine", lesson: 7 },
                { question: "👉 ___ book right here is very interesting", answer: "this", lesson: 8 },
                { question: "👤 ___ is playing football in the park", answer: "he", lesson: 2 },
                { question: "🎯 I saw John yesterday and waved to ___", answer: "him", lesson: 3 }
            ];
        } else if (startLesson === 9 && endLesson === 16) {
            // Revision 2: Lessons 9-16 - 10 questions
            return [
                { question: "👉 ___ is my favorite English book", answer: "this", lesson: 9 },
                { question: "🔄 I accidentally cut ___ while cooking", answer: "myself", lesson: 10 },
                { question: "⏰ She ___ here yesterday for the lesson", answer: "was", lesson: 11 },
                { question: "📅 Which day comes after Monday?", answer: "tuesday", lesson: 12 },
                { question: "🔄 I have ___ waiting for the bus for 30 minutes", answer: "been", lesson: 13 },
                { question: "📖 I saw ___ elephant at the zoo", answer: "an", lesson: 14 },
                { question: "👤 ___ am learning English every day", answer: "i", lesson: 15 },
                { question: "👤 ___ are doing great in this course", answer: "you", lesson: 16 },
                { question: "🔄 He built the entire house by ___", answer: "himself", lesson: 10 },
                { question: "📖 ___ sun is very bright today", answer: "the", lesson: 14 }
            ];
        } else if (startLesson === 17 && endLesson === 23) {
            // Revision 3: Lessons 17-23 - 10 questions
            return [
                { question: "👤 ___ is very tall and plays basketball", answer: "he", lesson: 17 },
                { question: "👤 ___ is teaching our English class", answer: "she", lesson: 18 },
                { question: "👤 ___ is raining heavily outside", answer: "it", lesson: 19 },
                { question: "👥 ___ are studying together for the exam", answer: "we", lesson: 20 },
                { question: "👥 ___ are waiting outside the classroom", answer: "they", lesson: 21 },
                { question: "❓ ___ you like learning English?", answer: "do", lesson: 22 },
                { question: "🔧 I ___ speak three languages fluently", answer: "can", lesson: 23 },
                { question: "👤 That is ___ brother over there", answer: "my", lesson: 17 },
                { question: "❓ ___ she understand the lesson?", answer: "does", lesson: 22 },
                { question: "🔧 You ___ practice English every day", answer: "should", lesson: 23 }
            ];
        } else if (startLesson === 1 && endLesson === 23) {
            // Final Revision: All lessons - 10 mixed questions
            return [
                { question: "🔤 Which letter comes right after 'B'?", answer: "c", lesson: 1 },
                { question: "👤 ___ are going to the cinema together", answer: "we", lesson: 2 },
                { question: "🎯 We called our friends and invited ___ to the party", answer: "them", lesson: 3 },
                { question: "🔄 She ___ working as a doctor at the hospital", answer: "is", lesson: 4 },
                { question: "📝 This handbag is ___ (it belongs to her)", answer: "hers", lesson: 7 },
                { question: "👉 ___ are my best friends from school", answer: "these", lesson: 9 },
                { question: "🔄 We really enjoyed ___ at the party", answer: "ourselves", lesson: 10 },
                { question: "📅 What is the first day of the week?", answer: "monday", lesson: 12 },
                { question: "👤 This is ___ house where we live", answer: "our", lesson: 20 },
                { question: "🔧 They ___ arrive late because of traffic", answer: "might", lesson: 23 }
            ];
        }
        return [];
    }

    handleMessage(userId, message) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                currentLesson: 0,
                currentQuestion: 0,
                score: 0,
                completedLessons: new Set()
            });
        }

        const user = this.users.get(userId);
        const cleanMessage = message.toLowerCase().trim();

        // Handle menu command - MULTIPLE OPTIONS
        if (cleanMessage === 'lessons' || cleanMessage === 'menu' || cleanMessage === 'more' || cleanMessage === 'options' || cleanMessage === 'help') {
            return this.showMainMenu(user);
        }

        // Handle revision sessions
        if (cleanMessage.includes('revision') || cleanMessage.includes('review') || cleanMessage.includes('test')) {
            const completed = user.completedLessons.size;
            if (completed >= 8 && cleanMessage.includes('1')) {
                return this.startLesson(userId, 24);
            } else if (completed >= 16 && cleanMessage.includes('2')) {
                return this.startLesson(userId, 25);
            } else if (completed >= 23 && cleanMessage.includes('3')) {
                return this.startLesson(userId, 26);
            } else if (completed >= 23 && (cleanMessage.includes('final') || cleanMessage.includes('exam'))) {
                return this.startLesson(userId, 27);
            } else {
                return this.showRevisionMenu(user);
            }
        }

        const lessonNumber = this.getLessonByKeyword(cleanMessage);
        if (lessonNumber) {
            return this.startLesson(userId, lessonNumber);
        }

        if (user.currentLesson > 0 && user.currentQuestion >= 0) {
            return this.checkAnswer(userId, cleanMessage);
        }

        return this.showMainMenu(user);
    }

    getLessonByKeyword(message) {
        for (const [keyword, lessonNumber] of Object.entries(this.lessonKeywords)) {
            if (message.includes(keyword)) {
                return lessonNumber;
            }
        }
        return null;
    }

    showMainMenu(user) {
        const completed = user.completedLessons.size;
        const progress = Math.round((completed / this.totalMainLessons) * 100);
        
        let menu = `🏫 *ENGLISH LEARNING BOT - 23 LESSONS* 🏫

*Core Lessons (1-5):*
• "alphabet" - Letters A-Z
• "subject" - Subject Pronouns  
• "object" - Object Pronouns
• "verb to be" - Am/Is/Are
• "numbers" - Numbers 1-1000

*Grammar Lessons (6-15):*
• "possessive adjective" - My/Your/His
• "possessive pronouns" - Mine/Yours/His
• "demonstrative adjective" - This/That/These
• "demonstrative pronouns" - This/That/These/Those
• "reflexive" - Myself/Yourself
• "verb to be tenses" - Present/Past/Future
• "days" - Days of the Week
• "to be to do" - Being/Been/Doing/Done
• "articles" - A/An/The
• "i me my" - I/Me/My usage

*Usage Lessons (16-23):*
• "you your" - You/Your usage
• "he him his" - He/Him/His usage  
• "she her" - She/Her usage
• "it its" - It/Its usage
• "we us our" - We/Us/Our usage
• "they them their" - They/Them/Their
• "questions" - Questions & Negatives
• "modal verbs" - Can/Will/Must etc.

📊 *Progress: ${completed}/${this.totalMainLessons} lessons (${progress}%)*

*Type "lessons" for this menu anytime!*`;

        return menu;
    }

    showRevisionMenu(user) {
        const completed = user.completedLessons.size;
        let menu = `📚 *REVISION SESSIONS* 📚\n\n`;

        if (completed >= 8) {
            menu += `• "revision 1" - Lessons 1-8 (10 questions)\n`;
        }
        if (completed >= 16) {
            menu += `• "revision 2" - Lessons 9-16 (10 questions)\n`;
        }
        if (completed >= 23) {
            menu += `• "revision 3" - Lessons 17-23 (10 questions)\n`;
            menu += `• "final revision" - All 23 lessons (10 questions)\n`;
        }

        if (menu === `📚 *REVISION SESSIONS* 📚\n\n`) {
            menu += `Complete more lessons to unlock revision sessions!\n`;
            menu += `Currently completed: ${completed}/23 lessons`;
        }

        menu += `\nType "lessons" for main menu`;
        return menu;
    }

    startLesson(userId, lessonNum) {
        const user = this.users.get(userId);
        user.currentLesson = lessonNum;
        user.currentQuestion = 0;
        user.score = 0;

        const lesson = this.lessons[lessonNum];
        const totalQuestions = lesson.length;
        
        if (lessonNum >= 24) {
            const revisionNames = {
                24: "Lessons 1-8 Revision",
                25: "Lessons 9-16 Revision", 
                26: "Lessons 17-23 Revision",
                27: "FINAL REVIEW - All Lessons"
            };
            return `📚 *${revisionNames[lessonNum]}* (10 questions)\n\n${this.getCurrentQuestion(userId)}`;
        } else {
            return `🎯 *Starting Lesson ${lessonNum}* (7 questions)\n\n${this.getCurrentQuestion(userId)}`;
        }
    }

    getCurrentQuestion(userId) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const question = lesson[user.currentQuestion];
        const totalQuestions = lesson.length;
        
        return `📝 *Question ${user.currentQuestion + 1}/${totalQuestions}*\n${question.question}\n\n*Type your answer:*`;
    }

    checkAnswer(userId, userAnswer) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const currentQuestion = lesson[user.currentQuestion];
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();
        const totalQuestions = lesson.length;

        const cleanUserAnswer = userAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();
        const cleanCorrectAnswer = correctAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();

        if (cleanUserAnswer === cleanCorrectAnswer) {
            user.score++;
            user.currentQuestion++;

            if (user.currentQuestion >= totalQuestions) {
                // Mark regular lessons as completed
                if (user.currentLesson >= 1 && user.currentLesson <= 23) {
                    user.completedLessons.add(user.currentLesson);
                }
                
                let completionMsg = `✅ *CORRECT!* 🎉\n\n`;
                
                if (user.currentLesson >= 24) {
                    const revisionNames = {
                        24: "Lessons 1-8 Revision",
                        25: "Lessons 9-16 Revision",
                        26: "Lessons 17-23 Revision", 
                        27: "FINAL REVIEW"
                    };
                    completionMsg += `🎊 *${revisionNames[user.currentLesson]} Completed!*\n`;
                } else {
                    completionMsg += `🎊 *Lesson ${user.currentLesson} Completed!*\n`;
                }
                
                completionMsg += `📊 Score: ${user.score}/${totalQuestions}\n\n`;
                
                user.currentLesson = 0;
                user.currentQuestion = 0;
                
                const completed = user.completedLessons.size;
                if (completed >= 23 && user.currentLesson <= 23) {
                    completionMsg += "🎉 CONGRATULATIONS! You completed ALL 23 lessons! 🎉\n";
                    completionMsg += "Type 'final revision' for the ultimate test!";
                } else if (completed >= 8 || completed >= 16) {
                    completionMsg += `Great progress! ${completed}/23 lessons done.\n`;
                    completionMsg += "Type 'revision' for practice tests!";
                } else {
                    completionMsg += "Type 'lessons' for more lessons!";
                }
                
                return completionMsg;
            }

            return `✅ *CORRECT!* 🎉\nScore: ${user.score}/${user.currentQuestion}\n\n${this.getCurrentQuestion(userId)}`;
        } else {
            return `❌ *INCORRECT!* 😔\nCorrect answer: *${currentQuestion.answer}*\n\nPlease try again:\n\n${this.getCurrentQuestion(userId)}`;
        }
    }
}

// ========== SERVER SETUP ==========
const bot = new EnglishLearningBot();

// Webhook for WhatsApp
app.post('/webhook', (req, res) => {
    console.log('📱 Received message:', req.body);
    
    const incomingMsg = req.body.Body;
    const from = req.body.From;
    
    console.log(`Message from ${from}: ${incomingMsg}`);
    
    const reply = bot.handleMessage(from, incomingMsg);
    
    try {
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>${reply}</Message>
            </Response>
        `);
    } catch (error) {
        console.error('Error sending response:', error);
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>Sorry, something went wrong!</Message>
            </Response>
        `);
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.send('🤖 English Learning Bot is running! Send a WhatsApp message to test.');
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Bot server running on port ${PORT}`);
});
