let skills: string[] = ['Bash', 'Counter-Strike'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter-Strike']
};

strider.hometown = 'Rivendell';

console.table(strider);

export{};