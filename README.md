# Tamagotchi Project
User stories:
1. User navigates to game page, is prompted to enter a name
2. name will display at the top of the page
3. In the status bar, the character's metrics will be displayed
    - Age, increasing every ten seconds, also the benchmark for new levels
    - Boredom, Sleepiness, and Hunger, all increment 1 unit as age increases. If any of these reach 10, the character dies
4. At the bottom is the Action panel, which contains buttons for various actions that can be taken. Depending on the action, the metrics will change accordingly.
    - Feed: displays hot dog eating animation, decreases hunger, increases sleepiness
    - Entertain: displays music animation, decreases boredom, increases hunger
    - Sleep: displays sleep animation, descreases sleepiness, increases boredom. 
    - Chew gum: displays gum chewing animation, does not affect any of the metrics
5. At age 3, the character proceeds to level two, which brings in the work and spend buttons, as well as the money metric.
    - The work function yields 2 money points, which then can be used to decrease sleepiness and boredom, at the cost of one point each. Although working does increase both of these metrics
    - Zeroing out on the money metric also causes the character to die.
    - Work and Spend each have thier own associated animations

Technology Used:
HTML/CSS/JS


Wireframe:
/Users/gregdanko/sei/w3/project_0/tamagotchi_project/images/wireframe.jpeg
