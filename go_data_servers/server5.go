package main

import (
	"fmt"
	"log"
	"net/http"
)

func hello(w http.ResponseWriter,r *http.Request){
	fmt.Fprintf(w, "Hello from data server #5!")
}

func main(){
	
	server1 := http.NewServeMux()
	server1.HandleFunc("/",hello)

		
	if err:= http.ListenAndServe("localhost:3005",server1); err != nil{
		log.Fatal(err)
	}

}