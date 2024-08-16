const JSONServer =require ('json-server');
const MPServer=JSONServer.create()
const router=JSONServer.router('db.json');
const middleware=JSONServer.defaults();

const PORT=3000||process.env.PORT;

MPServer.use(middleware);
MPServer.use(router);
MPServer.listen(PORT,()=>{
    console.log(`Media player server started running on port :${PORT}, waiting for client Request`);
    
})