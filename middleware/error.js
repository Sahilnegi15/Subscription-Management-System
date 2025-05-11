const errorMiddleware= (err,req,res,next)=>{

    try{
  let error ={...err};

  error.message=err.message;
  console.error(err);


  if(err.name=='CastError'){
    const message="resorce not found";
    error= new Error(message);
    error.statusCode = 404;
  }

  if(err.code==11000){
    const message = 'duplicate field value entered ';
    error = new Error(message);
    error.statusCode= 400;

  }
    }catch(error){
        next(error);

    }
};


export default errorMiddleware;

//create a subscription -> middleware(check for renewal date)->middleware(check for error)->next ->controlledr


