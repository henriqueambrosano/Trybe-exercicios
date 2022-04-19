const uppercase = require('./exercicios');

it('Testa a chamada da callback na função upercase', (done) => {
    uppercase('helloee', (str) => {
        try{
            expect(str).toBe('HELLOEE');
            done()
        }catch(error) {
            done(error);
        }
    });
});