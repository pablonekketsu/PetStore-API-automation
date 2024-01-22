const endpoint = 'https://petstore.swagger.io/v2/pet';

const newPet =
    {
    "id": 1234,
    "category": {
        "id": 12,
        "name": "string"
    },
    "name": "Dante",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1,
            "name": "string"
        }
    ],
    "status": "available"
};

const updatePet=
    {
    "id": 1234,
    "category": {
        "id": 12,
        "name": "string"
    },
    "name": "Virgil",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1234,
            "name": "string"
        }
    ],
    "status": "sold"
};
const status=
    {"status": "sold"};

const addPet = (newPet) => {
    cy.request('POST', endpoint, newPet);
};

const editPet = (updatePet) => {
    cy.request('PUT', endpoint, updatePet);
};
const  searchByStatus=(status)=>{
    cy.request('GET',`${endpoint}/findByStatus?status=`,status);
}
describe('PET STORE PROCESS', () => {
    it('Add a new pet', () => {
        addPet(newPet);
        cy.request('GET', `${endpoint}/${newPet.id}`)
            .its('body')
            .should('deep.equal', newPet);
    });
    it('Search by id', () => {
        cy.request('GET', `${endpoint}/${newPet.id}`)
            .its('body')
            .should('deep.equal', newPet);
    });
    it("Update the pet", () => {
        cy.request('GET', `${endpoint}/${updatePet.id}`)
            .its('status')
            .should('equal', 200);

        editPet(updatePet);

        cy.request('GET', `${endpoint}/${updatePet.id}`)
            .its('body')
            .should('deep.equal', updatePet);
    });
     it("search by status",()=>{
         searchByStatus(status);

         cy.request('GET', `${endpoint}/findByStatus?status=${status.status}`)
             .its('body')
             .should('be.an', 'array')
             .then((petsList) => {
                 const isIdInList = petsList.some(pet => pet.id === updatePet.id);
                 expect(isIdInList).to.be.true;
             });
     })
});
