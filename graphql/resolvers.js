import { people, getById } from "./db";

//쿼리를 해결하는 파일
const resolvers = {
    Query : {
        people: () => people,
        // person: () => nicolas
        //밑의 단축어임(ESnext 문법)
        // person: function(){
        //     return nicolas
        // }
        
        //여기서 argument를 줄 수 있음, 첫번째는 현재 Obj를 보내는 Obj(여기선 스킵)
        person: (_, {id}) => getById(id) //어떻게 id를 받는거지?
    }
}

export default resolvers;