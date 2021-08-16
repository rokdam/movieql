export const people = [
    {
        id : 1,
        name : " Nicolas",
        age : 18,
        gender : "female",
    },
    {
        id:2,
        name : " Nicolas2",
        age : 19,
        gender : "male",
    },
    {
        id:3,
        name : " Nicolas3",
        age : 20,
        gender : "female",
    }
];

export const getById = id => {
    //filter는 모든 대상을 거쳐 해당 조건에 맞는 걸 리턴하는 것 
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}