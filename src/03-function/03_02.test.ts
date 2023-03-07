import {CityType} from "../02-objects/02_02";
import { isContainGovermentBuildingName, isContainsSomeHouses} from "./03";


let city:CityType


beforeEach(()=> {
    city = {
        title:'Yoshar-Ola',
        houses:[
            {
                id:1,
                title: 'House1',
                address: "Pushkina street",
                repaired:false
            },
            {
                id:2,
                title: 'House2',
                address: "Marksa street",
                repaired:false
            },
            {
                id:3,
                title: 'House3',
                address: "Lenina street",
                repaired:false
            },
        ],
        govermentBuildings:[
            {
                id:1,
                title: 'hospital',
                address: "Gryaznova street",
                budget:200000,
                staffCount:200
            },
            {
                id:2,
                title: 'fire station',
                address: "Truda street",
                budget:10000,
                staffCount:200
            },
            {
                id:1,
                title: 'school',
                address: "Moscovskaya street",
                budget:40000,
                staffCount:30
            },
        ],
        citizenNumbers:100000
    }
})

//01.создайте в отдельном файле функцию, чтобы тесты прошли
test('test city should contains 3 houses', () => {
    //actions
    let result1 = isContainsSomeHouses(city,3)
    //expected result
    expect(result1).toBe(true)

})

//02.Напишите функцию, чтобы тесты прошли
 test('test city should contains hospital and fire station', () => {
     //action

     //если метод 04-filter не найдет в массиве обьект с именем -- вернет undefind.
     //если найдет -- вернет {...}
     let result1 = isContainGovermentBuildingName(city,'hospital')

     let result2 = isContainGovermentBuildingName(city,'fire station')


     //expected result
     expect(result1).toBe(true)
     expect(result2).toBe(true)
     //expect(result2).toBe(true)
 })

//4.Напишите функцию, которая будет удоволетворять тесту
//test('Budget should be changed', ()=> {
//    let result1= BudgetChanger(city,5000,'schoool')

//   expect( result1).toBe('array')
//} )

//5.Написать функцию, которая будет удалять stuff

//test('Some test',()=> {
//    let result1 = HouseRepairing(city,1)
//    expect(result1).toBe('hello')
//})