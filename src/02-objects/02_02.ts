 export type govermentBuildingsType = {
    id:number
    title: string
    address: string
     budget:number
     staffCount:number
}

 export type housesType ={
    id:number
    title: string
    address: string
     repaired:boolean
}

 export type CityType = {
    title: string
    houses: Array<housesType>
    govermentBuildings:Array<govermentBuildingsType>
    citizenNumbers:number
}