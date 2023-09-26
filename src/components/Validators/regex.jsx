const testEmail = (value) => {
    const emailPattern = /^[A-Z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattern.test(value)
}
const testCodeMelli = (value) => {

}
const testPhoneNumber = (value) => {
    testEmail,
        testCodeMelli,
        testPhoneNumber
}

export default testEmail