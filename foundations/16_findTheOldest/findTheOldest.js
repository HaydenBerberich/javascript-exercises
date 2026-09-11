const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
        if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;
        return oldestAge > personAge ? oldest : person;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
