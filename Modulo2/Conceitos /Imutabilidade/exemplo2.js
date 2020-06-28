const students = [
    {
        name: "Gustavo",
        grade: 7
    },

    {
        name: "Pedro",
        grade: 4
    },

    {
        name: "Stefany",
        grade: 9.4
    }
];

function getAprovados(listStudents){
    return listStudents.filter(students => students.grade >= 7);
}

console.log('Alunos Aprovados: ');
console.log(getAprovados(students));

console.log('\nLista de alunos:');
console.log(students);