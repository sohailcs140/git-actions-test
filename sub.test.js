const sub = require("./sub")

test("subtract 1 from 1", ()=>{
    expect(sub(1, 1)).toBe(0)
})

test("subtract 10 from 8", ()=>{
    expect(sub(8, 10)).toBe(-2)
})