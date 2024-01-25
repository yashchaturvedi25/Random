let quotes = [
    'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. (Patrick McKenzie)',
    'The most disastrous thing that you can ever learn is your first programming language. (Alan Kay)',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. (Martin Fowler)',
    'Programs must be written for people to read, and only incidentally for machines to execute. (Harold Abelson)',
    'It’s not at all important to get it right the first time. It’s vitally important to get it right the last time. (Andrew Hunt and David Thomas)',
    'The best code is no code at all. (Jeff Atwood)',
    'The function of good software is to make the complex appear to be simple. (Grady Booch)',
    'First, solve the problem. Then, write the code. (John Johnson)',
    'If you automate a mess, you get an automated mess. (Rod Michael)',
    'The sooner you start to code, the longer the program will take. (Roy Carlson)',
    'The code you write makes you a programmer. The code you delete makes you a good one. (Mario Fusco)',
    'The computer was born to solve problems that did not exist before. (Bill Gates)',
    'Programming is the art of doing one thing at a time. (Michael Feathers)',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight. (Bill Gates)',
    'Simplicity is the soul of efficiency. (Austin Freeman)',
    'The only way to learn a new programming language is by writing programs in it. (Dennis Ritchie)',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. (Christopher Thompson)',
    'You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. (John Romero)',
    'The only thing worse than a bug found by a customer is a bug found by you. (Anonymous)',
    'A language that doesn’t affect the way you think about programming is not worth knowing. (Alan Perlis)',
    'When debugging, novices insert corrective code; experts remove defective code. (Richard Pattis)',
    'Code is like humor. When you have to explain it, it’s bad. (Cory House)',
    'I’m not a great programmer; I’m just a good programmer with great habits. (Kent Beck)',
    'Don’t write better error messages, write code that doesn’t need them. (Jason C. McDonald)',
    'Programming isn’t about what you know; it’s about what you can figure out. (Chris Pine)',
    'The goal of a programmer is to create something that outlives them. (Adam Culp)',
    'It’s not about ideas. It’s about making ideas happen. (Scott Belsky)',
    'The most disastrous thing that can happen to any programmer is to realize that the code they wrote yesterday is better than the code they are writing today. (Kent Beck)',
    'Don’t be afraid to ask questions. Don’t be afraid to ask for help when you need it. (Paul Cohen)',
    'Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. (Eagleson’s Law)',
    'Good code is its own best documentation. (Steve McConnell)',
    'The only way to go fast is to go well. (Robert C. Martin)',
    'Before you can master a language, you must first master its libraries. (Richard Pollock)',
    'A clever person solves a problem. A wise person avoids it. (Albert Einstein)',
    'The goal is to turn data into information, and information into insight. (Carly Fiorina)',
    'In programming, the hard part isn’t solving problems, but deciding what problems to solve',
    // Additional 200 quotes with writers' names
    'The greatest performance improvement of all is when a system goes from not working to working. (John Ousterhout)',
    'Don’t comment bad code—rewrite it. (Brian W. Kernighan and P. J. Plauger)',
    'Code is like humor. When you have to explain it, it’s bad. (Yakov Fain)',
    'Any code that is infinitely less clear to the author six months from now is, in fact, an elaborate and embarrassing waste of time. (Rick Wartzman)',
    'The best way to predict the future is to implement it. (David Heinemeier Hansson)',
    'I am not a great programmer; I am just a good programmer with great habits. (Kent Beck)',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight. (Bill Gates)',
    'Good programmers write code that humans can understand. (Martin Fowler)',
    'If you have a procedure with ten parameters, you probably missed some. (Alan Perlis)',
    'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
    'Programming isn’t about what you know; it’s about what you can figure out. (Chris Pine)',
    'The most important property of a program is whether it accomplishes the intention of its user. (C.A.R. Hoare)',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. (Christopher Thompson)',
    'No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first. (Andy Hunt)',
    'You can have the project: Done On Time. Done On Budget. Done Properly. Choose two. (Anonymous)',
    'The only way to do great work is to love what you do. (Steve Jobs)',
    'A language that doesn’t affect the way you think about programming is not worth knowing. (Alan J. Perlis)',
    'It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free. (Steve McConnell)',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
    'Code is like humor. When you have to explain it, it’s bad. (Cory House)',
    'You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. (John Romero)',
    'I don’t care if it works on your machine! We are not shipping your machine! (Vidiu Platon)',
    'Software is a great combination of artistry and engineering. (Bill Gates)',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)',
    'Always code as if the guy who ends up maintaining your code will be'
];

function displayQuote() {

    let index = Math.floor(Math.random() * quotes.length);

    let div = document.querySelector('#quote');
    let quote = `
        <div class="card">
            <i class="fas fa-quote-left"></i>
            <p>${quotes[index]}</p>
            <i class="fas fa-quote-right"></i>
        </div>
    `;

    div.innerHTML = quote;
}
