package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main(){
	fmt.Printf("Starting server on 8080\n")

	servers := [10]string{"http://localhost:3000","http://localhost:3001","http://localhost:3002","http://localhost:3003","http://localhost:3004","http://localhost:3005","http://localhost:3006","http://localhost:3007","http://localhost:3008","http://localhost:3009"}
	
	serverNo := 0
	http.HandleFunc("/",func(w http.ResponseWriter, r *http.Request){
		fmt.Println("%s",servers[serverNo])
		res, err := http.Get(servers[serverNo])

		serverNo = serverNo + 1

		if(serverNo == 10){
			serverNo = 0
		}

		if err != nil{
		}

		resBody, err := io.ReadAll(res.Body)
		if err != nil{
		}
		fmt.Fprintf(w,"%s",resBody)
	})
	if err:= http.ListenAndServe(":8080",nil); err != nil {
		log.Fatal(err)
	}
}