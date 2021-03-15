const questions = [
    {
        qusTitle: 'A complete graph can have',
        options: [
            'n2 spanning trees',
            'nn - 2 spanning trees',
            'n3 spanning trees',
            'n4 spanning trees'
        ],
        correctAnswer : 'nn - 2 spanning trees'
    },
    {
        qusTitle: 'What is full form of CSS',
        options: [
            'Cascading sheet style',
            'Customized style sheets',
            'Custom style sheet',
            'none of above'
        ],
        correctAnswer : 'none of above'
    },
    {
        qusTitle: 'How to include javascript in HTML document',
        options: [
            'script',
            'link',
            'rel',
            'src'
        ],
        correctAnswer : 'script'
    },
    {
        qusTitle: 'How to declare variable in javascript',
        options: [
            'int',
            'variable',
            'var',
            'declare'
        ],
        correctAnswer : 'var'
    },
    {
        qusTitle: 'What => means in javascript framework',
        options: [
            'function',
            'arrow function',
            'both a and b',
            'none of the above'
        ],
        correctAnswer : 'arrow function'
    },
    {
        qusTitle: 'Which of these is not a javascript framework',
        options: [
            'React',
            'Vue',
            'Angular',
            'Django'
        ],
        correctAnswer : 'Django'
    },
    {
        qusTitle: 'How to define objects in js',
        options: [
            '{}',
            '<>',
            '[]',
            '()'
        ],
        correctAnswer : '{}'
    },
    {
        qusTitle: 'Which of these is not a valid js version',
        options: [
            'ES6',
            'EX19',
            'ES2015',
            'ES5'
        ],
        correctAnswer : 'EX19'
    },
    {
        qusTitle: 'Whats is the output of \'2\' + 2',
        options: [
            '22',
            '4',
            '2',
            'none of the above'
        ],
        correctAnswer : '22'
    },
    {
        qusTitle: 'Whats is the output of \'2\' - 1',
        options: [
            '1',
            '21',
            '3',
            'none of above'
        ],
        correctAnswer : '3'
    }    
];

// var score=0;

function score()
{
    const ans= document.forms['myForm']['option'].value;
    if(ans==ques.ans)
    {
        document.getElementById('answer').innerHTML="<span style='background-color:'green',color:'green''>Correct"+"</span>"
    }
    else
    {
        document.getElementById('answer').innerHTML="<span style='background-color:'red',color:'red''>Wrong"+"</span>"
    }
    document.write("sfdhkdsh");
}




















