/*  
    ************
    ** Consts **
    ************
*/

// theme modals img
const defaultOptionSticker = document.getElementById('defaultOptionSticker');
const halloweenOptionSticker = document.getElementById('halloweenOptionSticker');
const christmasOptionSticker = document.getElementById('christmasOptionSticker');
const easterOptionSticker = document.getElementById('easterOptionSticker');

// theme modals ratios
const defaultOptionRadio = document.getElementById('defaultOptionRadio');
const halloweenOptionRadio = document.getElementById('halloweenOptionRadio');
const christmasOptionRadio = document.getElementById('christmasOptionRadio');
const easterOptionRadio = document.getElementById('easterOptionRadio');

// positive theme modals stickers
const positiveDefaultTheme = './assets/stickers/default/in-love.png';
const positiveHalloweenTheme = './assets/stickers/halloween/love.png';
const positiveChristmasTheme = './assets/stickers/christmas/love.png';
const positiveEasterTheme = './assets/stickers/easter/love.png';

// negative theme modals stickers
const negativeDefaultTheme = './assets/stickers/default/sick.png';
const negativeHalloweenTheme = './assets/stickers/halloween/sad.png';
const negativeChristmasTheme = './assets/stickers/christmas/sad.png';
const negativeEasterTheme = './assets/stickers/easter/sad.png';

// projects modals img
const kaggleModalSticker = document.getElementById('kaggleModalSticker');
const mlAlgorithmsModalSticker = document.getElementById('mlAlgorithmsModalSticker');
const blogModalSticker = document.getElementById('blogModalSticker');

// projects modals stickers
const defaultComingSoonSticker = './assets/stickers/default/sleepy.png';
const halloweenComingSoonSticker = './assets/stickers/halloween/yoga.png';
const christmasComingSoonSticker = './assets/stickers/christmas/sleep.png';
const easterComingSoonSticker = './assets/stickers/easter/yoga.png';

// img tags
const aboutMeSticker = document.getElementById('aboutMeSticker');
const skillsSticker = document.getElementById('skillsSticker');
const projectsSticker = document.getElementById('projectsSticker');
const reachMeSticker = document.getElementById('reachMeSticker');

// default theme stickers
const aboutMeDefaultTheme = './assets/stickers/default/hi.png';
const skillsDefaultTheme = './assets/stickers/default/cool.png';
const projectsDefaultTheme = './assets/stickers/default/amazed.png';
const reachMeDefaultTheme = './assets/stickers/default/excited.png';

// halloween theme stickers
const aboutMeHalloweenTheme = './assets/stickers/halloween/hi.png';
const skillsHalloweenTheme = './assets/stickers/halloween/happy (1).png';
const projectsHalloweenTheme = './assets/stickers/halloween/run.png';
const reachMeHalloweenTheme = './assets/stickers/halloween/relaxed.png';

// christmas theme stickers
const aboutMeChristmasTheme = './assets/stickers/christmas/hi.png';
const skillsChristmasTheme = './assets/stickers/christmas/hooray.png';
const projectsChristmasTheme = './assets/stickers/christmas/announcement.png';
const reachMeChristmasTheme = './assets/stickers/christmas/elf.png';

// easter theme stickers
const aboutMeEasterTheme = './assets/stickers/easter/hi.png';
const skillsEasterTheme = './assets/stickers/easter/run.png';
const projectsEasterTheme = './assets/stickers/easter/proud.png';
const reachMeEasterTheme = './assets/stickers/easter/relaxed.png';

/*
    **************
    ** Function **
    **************
*/
function changeTheme() {
    const actualTheme = localStorage.getItem('actualTheme');
    
    // Halloween Theme
    if (actualTheme === '1') {

        // page stickers
        aboutMeSticker.src = aboutMeHalloweenTheme;
        skillsSticker.src = skillsHalloweenTheme;
        projectsSticker.src = projectsHalloweenTheme;
        reachMeSticker.src = reachMeHalloweenTheme;

        // themes modal stickers
        defaultOptionSticker.src = negativeDefaultTheme;
        halloweenOptionSticker.src = positiveHalloweenTheme;
        christmasOptionSticker.src = negativeChristmasTheme;
        easterOptionSticker.src = negativeEasterTheme;

        // themes modal radios
        defaultOptionRadio.checked = false;
        halloweenOptionRadio.checked = true;
        christmasOptionRadio.checked = false;
        easterOptionRadio.checked = false;

        // other modals stickers
        kaggleModalSticker.src = halloweenComingSoonSticker;
        mlAlgorithmsModalSticker.src = halloweenComingSoonSticker;
        blogModalSticker.src = halloweenComingSoonSticker;
    }

    // Christmas Theme
    else if (actualTheme === '2') {

        // page stickers
        aboutMeSticker.src = aboutMeChristmasTheme;
        skillsSticker.src = skillsChristmasTheme;
        projectsSticker.src = projectsChristmasTheme;
        reachMeSticker.src = reachMeChristmasTheme;

        // themes modal stickers
        defaultOptionSticker.src = negativeDefaultTheme;
        halloweenOptionSticker.src = negativeHalloweenTheme;
        christmasOptionSticker.src = positiveChristmasTheme;
        easterOptionSticker.src = negativeEasterTheme;

        // themes modal radios
        defaultOptionRadio.checked = false;
        halloweenOptionRadio.checked = false;
        christmasOptionRadio.checked = true;
        easterOptionRadio.checked = false;

        // other modals stickers
        kaggleModalSticker.src = christmasComingSoonSticker;
        mlAlgorithmsModalSticker.src = christmasComingSoonSticker;
        blogModalSticker.src = christmasComingSoonSticker;
    }

    // Easter Theme
    else if (actualTheme === '3') {

        // page stickers
        aboutMeSticker.src = aboutMeEasterTheme;
        skillsSticker.src = skillsEasterTheme;
        projectsSticker.src = projectsEasterTheme;
        reachMeSticker.src = reachMeEasterTheme;

        // themes modal stickers
        defaultOptionSticker.src = negativeDefaultTheme;
        halloweenOptionSticker.src = negativeHalloweenTheme;
        christmasOptionSticker.src = negativeChristmasTheme;
        easterOptionSticker.src = positiveEasterTheme;

        // themes modal radios
        defaultOptionRadio.checked = false;
        halloweenOptionRadio.checked = false;
        christmasOptionRadio.checked = false;
        easterOptionRadio.checked = true;

        // other modals stickers
        kaggleModalSticker.src = easterComingSoonSticker;
        mlAlgorithmsModalSticker.src = easterComingSoonSticker;
        blogModalSticker.src = easterComingSoonSticker;
    }

    // Default Theme
    else {

        // page stickers
        aboutMeSticker.src = aboutMeDefaultTheme;
        skillsSticker.src = skillsDefaultTheme;
        projectsSticker.src = projectsDefaultTheme;
        reachMeSticker.src = reachMeDefaultTheme;

        // themes modal stickers
        defaultOptionSticker.src = positiveDefaultTheme;
        halloweenOptionSticker.src = negativeHalloweenTheme;
        christmasOptionSticker.src = negativeChristmasTheme;
        easterOptionSticker.src = negativeEasterTheme;

        // themes modal radios
        defaultOptionRadio.checked = true;
        halloweenOptionRadio.checked = false;
        christmasOptionRadio.checked = false;
        easterOptionRadio.checked = false;

        // other modals stickers
        kaggleModalSticker.src = defaultComingSoonSticker;
        mlAlgorithmsModalSticker.src = defaultComingSoonSticker;
        blogModalSticker.src = defaultComingSoonSticker;
    }
}

/*
    *****************
    ** Window Load **
    *****************
*/
window.addEventListener('load', changeTheme());

/*
    **************************
    ** Input Radio Checking **
    **************************
*/
defaultOptionRadio.addEventListener('change', function() {
    localStorage.setItem('actualTheme', '0');
    changeTheme();
});


halloweenOptionRadio.addEventListener('change', function() {
    localStorage.setItem('actualTheme', '1');
    changeTheme();
});

christmasOptionRadio.addEventListener('change', function() {
    localStorage.setItem('actualTheme', '2');
    changeTheme();
});

easterOptionRadio.addEventListener('change', function() {
    localStorage.setItem('actualTheme', '3');
    changeTheme();
});