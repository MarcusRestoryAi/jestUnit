const Rektangel = require("./rektangel");

describe("Test för Rektangel klass", () => {
    //Kontrollera att Rektangel object skapas
    it("Skapa en rektangel", () => {
        expect(new Rektangel(4, 2)).toBeInstanceOf(Rektangel)
    })

    it("Skapa en rektangel med förbestämda värden", () => {
        let length = 8;
        let width = 5

        let myRek = new Rektangel(length, width);

        expect(myRek.length).toBe(length)
        expect(myRek.width).toBe(width)
    })

    it("Ändra Rektangel strolek till nya värden", () => {
        let length = 8;
        let width = 5

        let myRek = new Rektangel(1,1);

        expect(myRek.length).toBe(1)
        expect(myRek.width).toBe(1)

        myRek.setSize(length, width)

        expect(myRek.length).toBe(length)
        expect(myRek.width).toBe(width)
    })

    it("Hämta Rektangels Area", () => {
        let length = 8;
        let width = 5

        let myRek = new Rektangel(length, width);
        expect(myRek.getArea()).toBe(width * length)
    })

    it("Är Rektangel en Kvadrat (false)", () => {
        let length = 8;
        let width = 5

        let myRek = new Rektangel(length, width);
        expect(myRek.isSquare()).toBeFalsy();
    })

    it("Är Rektangel en Kvadrat (true)", () => {
        let length = 8;
        let width = 8

        let myRek = new Rektangel(length, width);
        expect(myRek.isSquare()).toBeTruthy();
    })


})