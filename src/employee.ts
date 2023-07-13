interface IEmployee {
    fName: string,
    lName: string,
    age: number,
    cool?: boolean
    apps: {appName: string, production: boolean }
}

interface IManager extends IEmployee {
    salaryTier: number
}

let student1 = {
    fName: 'Jon',
    lName: 'Smith',
    age: 25,
    cool: true,
    app: {appName: 'CF AKeneo,', production: true },
    
}

let employee1: IEmployee = {
    fName: 'Jon',
    lName: 'Smith',
    age: 25,
    cool: true,
    apps: { appName: 'CF Akeneo', production: true}
}

let manager1: IManager = {
    fName: 'Jon',
    lName: 'Smith',
    age: 25,
    cool: true,
    apps: {appName: 'CF AKeneo,', production: true },
    salaryTier: 2
}

