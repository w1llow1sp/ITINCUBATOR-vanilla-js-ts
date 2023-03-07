import {CityType} from "./02_02";

let city : CityType;


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
                id:1,
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

//01.создайте тип CityType
//02.заполните обьект city,чтобы тексты ниже прошли
test('test city should contains 3 houses', () => {
    //actions
    const result1=city.houses.length
    //expected result
    expect(result1).toBe(3)

})

//01.дополните тип GovermentBuldingType2
//02.заполните обьект city,чтобы тексты ниже прошли
 test('test city should contains hospital and fire station', () => {
     //action

     //если метод 04-filter не найдет в массиве обьект с именем -- вернет undefind.
     //если найдет -- вернет {...}
     const result1 = city.govermentBuildings.filter(item => {
        return item.title === 'fire station'
     })

     const result2 = city.govermentBuildings.filter(item => {
         return item.title === 'hospital'
     })


     //expected result
     expect(typeof result1).toBe('object')
     expect(typeof result2).toBe('object')
     //expect(result2).toBe(true)
 })