import http from 'k6/http';
import { check } from "k6";run
export default function () {
const payload = JSON.stringify({

name: 'budi',
job: 'hrd',
title: 'finish task 4',
completed: 'false'

});
const params = {
headers: {
'Content-Type': 'application/json',
},
};
const res = http.post('https://reqres.in/api/users',
payload, params);
check(res,
{
'response code was 201': (res) => res.status == 201,
" data user":(res) => typeof res == "object" 
},
);
}


