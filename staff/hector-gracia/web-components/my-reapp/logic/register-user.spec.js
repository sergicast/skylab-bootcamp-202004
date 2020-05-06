false && describe("registerUser",()=>{
    //Le da valores al azar a los nombres
    let name, surname, email, password;
    beforeEach(() =>{
        users.length=0;
        name=names.random();
        surname=surnames.random();
        email= `${name.toLowerCase().split(' ').join('')}${surname.toLowerCase().split(' ').join('')}@mail.com`;
        password=passwords.random();
    })
    
    it("should register a new user if there are no anomalies", done =>{
        //Lo registra
        registerUser(name,surname,email,password,(error)=>{
            expect(error).to.be.undefined;
            //Comprobar que se ha registrado bien
            //Primero coge el token
            call("POST","https://skylabcoders.herokuapp.com/api/v2/users/auth",
            `{ "username": "${email}","password": "${password}" }`, {"Content-type": "application/json"},(error,status,body)=>{
                expect(error).to.be.undefined;
                expect(status).to.equal(200);
                expect(body).to.exist;
                const token=JSON.parse(body).token;
                //Ahora usa el token para acceder a sus datos
                call("GET", 'https://skylabcoders.herokuapp.com/api/v2/users', undefined, 
                {'Authorization': `Bearer ${token}`},(error,status,body)=>{
                    expect(error).to.be.undefined;
                    expect(status).to.equal(200);
                    expect(body).to.exist;
                    const result= JSON.parse(body);
                    expect(result.name).to.equal(name);
                    expect(result.surname).to.equal(surname);
                    expect(result.username).to.equal(email);
                    expect(result.password).to.be.undefined;
                    //Ahora que lo hemos comprobado borramos el nombre de la lista
                    call("DELETE","https://skylabcoders.herokuapp.com/api/v2/users",`{ "password": "${password}"}`,
                    {"Content-type": "application/json", "Authorization": `Bearer ${token}`},(error,status,body)=>{
                        expect(error).to.be.undefined;
                        expect(status).to.equal(204);
                        expect(body).to.equal("");
                        done();
                    })
                }) 
                
            })
        });
        
    }).timeout(5000)
    
    it("should not let you register the same email more than once",done=>{
        //Registrar el email de estrangis
        call("POST","https://skylabcoders.herokuapp.com/api/v2/users",
        `{ "username": "${email}","password": "${password}", "name": "${name}", "surname": "${surname}" }`,
        { 'Content-type': 'application/json' },
        (error,status,body)=>{
            //Tratar de registrarlo correctamente
            registerUser(name,surname,email,password,(error)=>{
            expect(error).to.exist;
            //Comprobar que se ha registrado bien
            //Primero coge el token
            call("POST","https://skylabcoders.herokuapp.com/api/v2/users/auth",
            `{ "username": "${email}","password": "${password}" }`, {"Content-type": "application/json"},(error,status,body)=>{
                expect(error).to.be.undefined;
                expect(status).to.equal(200);
                expect(body).to.exist;
                const token=JSON.parse(body).token;
                //Ahora usa el token para acceder a sus datos
                call("GET", 'https://skylabcoders.herokuapp.com/api/v2/users', undefined, 
                {'Authorization': `Bearer ${token}`},(error,status,body)=>{
                    expect(error).to.be.undefined;
                    expect(status).to.equal(200);
                    expect(body).to.exist;
                    const result= JSON.parse(body);
                    expect(result.name).to.equal(name);
                    expect(result.surname).to.equal(surname);
                    expect(result.username).to.equal(email);
                    expect(result.password).to.be.undefined;
                    //Ahora que lo hemos comprobado borramos el nombre de la lista
                    call("DELETE","https://skylabcoders.herokuapp.com/api/v2/users",`{ "password": "${password}"}`,
                    {"Content-type": "application/json", "Authorization": `Bearer ${token}`},(error,status,body)=>{
                        expect(error).to.be.undefined;
                        expect(status).to.equal(204);
                        expect(body).to.equal("");
                        done();
                    })
                }) 
                
            })
            })
        })
        

    }).timeout(5000)
    
    it("should throw error on inputs that do not match the specified format",() => {
        let name= '%%Pau',
        surname="surname",
        email="d@mail.com",
        password="password1";
        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(Error, "%%Pau does not match the format")
        name= "name",
        surname= 'Hector//',
        email="f@mail.com",
        password="password1";
        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(Error, "Hector// does not match the format")
        name= "name",
        surname="surname",
        email= 'Marc&&',
        password="password1";
        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(Error, "Marc&& is not an e-mail")
        name= "name",
        surname="surname",
        email="g@mail.com",
        password= 'Hector';
        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(Error, "password does not have the min length")
        
    
    })
    it("should throw error on non-string inputs", () => {
        let name= {},
        surname="surname1",
        email="a@mail.com",
        password="password1";
        

        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(TypeError, '[object Object] is not a string')

        name= "name",
        surname= 1,
        email="b@mail.com",
        password="password1";
        

        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(TypeError, "1 is not a string")

        name= "name",
        surname="surname",
        email= 1,
        password="password1";
        

        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(TypeError, "1 is not a string")
        
        name= "name",
        surname="surname",
        email="c@mail.com",
        password= 17894546;
        

        expect(() => {
            registerUser(name,surname,email,password)
        }).to.throw(TypeError, "17894546 is not a string")
        name= "name",
        surname="surname",
        email="g@mail.com",
        password= '123123123';
        expect(() => {
            registerUser(name,surname,email,password,"notafunction")
        }).to.throw(TypeError, "notafunction is not a function")
    })

})
/*describe(("toggleFollowUser"), () => {
    let name1, surname1, email1, password1, name2, surname2, email2, password2;


    beforeEach(() => { 
        name1 = names.random()
        name2 = names.random()
        surname1 = surnames.random()
        surname2 = surnames.random()
        email1 = `${name1.toLowerCase().split(" ").join("")}${surname1.toLowerCase()
            .split(" ").join("").concat("-").concat(Math.random())}@mail.com`;
        email2 = `${name2.toLowerCase().split(" ").join("")}${surname2.toLowerCase()
            .split(" ").join("").concat("-").concat(Math.random())}@mail.com`;
        password1 = passwords.random()
        password2 = passwords.random()
    })
    it.only("should follow and unfollow a user", (done) => {

        call('POST', "https://skylabcoders.herokuapp.com/api/v2/users/",
            `{"name": "${name1}" , "surname": "${surname1}", "username" : "${email1}","password": "${password1}"}`,
            
            { "Content-type": "application/json" }, (error, status, body) => {
                expect(error).to.be.undefined
                if (status === 201) {
                    call('POST', "https://skylabcoders.herokuapp.com/api/v2/users/",
                        `{"name": "${name2}" , "surname": "${surname2}", "username" : "${email2}","password": "${password2}"}`,
                        { "Content-type": "application/json" }, (error, status, body) => {
                            expect(error).to.be.undefined
                            if (status === 201) {
                                call('POST', "https://skylabcoders.herokuapp.com/api/v2/users/auth",
                                    `{"username" : "${email1}","password": "${password1}"}`,
                                    { "Content-type": "application/json" }, (error, status, body) => {
                                        expect(error).to.be.undefined

                                        if (status === 200) {
                                            const { token } = JSON.parse(body)


                                            call('GET', "https://skylabcoders.herokuapp.com/api/v2/users/",
                                                undefined, { Authorization: `Bearer ${token}` }, (error, status, body) => {
                                                    if (error) return done(error)
                                                    if (status === 200) {
                                                        const { following } = JSON.parse(body)
                                                        expect(following).to.be.undefined

                                                        toggleFollowUser(email2, token, (error) => {
                                                            if (error) return done(error)
                                                            //La chicha
                                                            //Comprobamos que user1.following.length existe y es 1
                                                            call('GET', "https://skylabcoders.herokuapp.com/api/v2/users/",
                                                                undefined, { Authorization: `Bearer ${token}` }, (error, status, body) => {
                                                                    if (error) return done(error)
                                                                    if (status === 200) {
                                                                        const { following } = JSON.parse(body)
                                                                        expect(following.length).to.be.equal(1)
                                                                        //Le damos a desseguir
                                                                        toggleFollowUser(email2, token, (error) => {
                                                                            //Comprobamos que user1.following.length es 0

                                                                            call('GET', "https://skylabcoders.herokuapp.com/api/v2/users/",
                                                                                undefined, { Authorization: `Bearer ${token}` }, (error, status, body) => {
                                                                                    if (error) return done(error)
                                                                                    if (status === 200) {
                                                                                        const { following } = JSON.parse(body)
                                                                                        expect(following.length).to.be.equal(0)
                                                                                        //Borrar a los 2 usuarios
                                                                                        done()
                                                                                    }
                                                                                }
                                                                            )
                                                                        })
                                                                    }
                                                                }
                                                            )
                                                        })
                                                    }
                                                }
                                            )
                                        }
                                        else {
                                            const { error } = JSON.parse(body)
                                            done(new Error(error))
                                        }
                                    })
                            } else {
                                const { error } = JSON.parse(body)
                                done(new Error(error))
                            }
                        }
                    )
                } else {
                    const { error } = JSON.parse(body)
                    done(new Error(error))
                }
            }
        )
        //Call con el register(name1,surname1) x
        //Meter a dos usuarios x

        //Que usuario 1 siga a 2

        //Comprobar que user1.following incluye a user 2
        //Comprobar que user2.following no se ha visto afectado

        //Que usuario 1 deje de seguir a usuario 2

        //Comprobar que user1.following no incluye a user 2
        //Comprobar que user2.following no se ha visto afectado

        //Eliminar a los usuarios 1 y 2 de la base de datos



    }).timeout(10000)
    afterEach(done => {
        //Buscar si hay user con username===email1 y si existe lo borra
        //Luego lo mismo con email2
        call('POST', 'https://skylabcoders.herokuapp.com/api/v2/users/auth',
            undefined, `{"username" : "${email1}","password": "${password1}"}`,
            (error, status, body) => {

                const token1 = JSON.parse(body).token

                call("DELETE", "https://skylabcoders.herokuapp.com/api/v2/users",
                    `{ "password": "${password1}"}`,
                    { "Content-type": "application/json", "Authorization": `Bearer ${token1}` },
                    (error, status, body) => {

                        call('POST', 'https://skylabcoders.herokuapp.com/api/v2/users/auth',
                            undefined, `{"username" : "${email2}","password": "${password2}"}`,
                            (error, status, body) => {
                                
                                const token2 = JSON.parse(body).token

                                call("DELETE", "https://skylabcoders.herokuapp.com/api/v2/users",
                                    `{"password": "${password2}"}`,
                                    { "Content-type": "application/json", "Authorization": `Bearer ${token2}` },
                                    (error, status, body) => {
                                        done();
                                    })
                            })
                    })
            })
        //Errores de tipo: si (user,emailFollowing, token, callback) no son del tipo adecuado

        //Error de que se le pasan parametros del tipo adecuado pero con valores invalidos

        //Error de que los usuarios que se le pasan no existen

    })
})*/