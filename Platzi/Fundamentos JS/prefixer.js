const palabra = prefijo => palabra => ` take `+prefijo+` `+palabra
const re = palabra("tarake")
re("take.");


function makePrefixer(prefijo){
  return function (palabra){
    console.log(`${prefijo}${palabra}`);
  }
}
const prefijoRe = makePrefixer("re")


prefijoRe("bueno")
prefijoRe("malo")
