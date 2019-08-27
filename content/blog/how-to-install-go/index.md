---
title: How to install Go on Ubuntu
date: '2019-08-27'
---

1. Go to official website and download the archive with Go.
1. Extract the downloaded archive.
1. Choose the directory for your future go projects. In our case it will be `$HOME/work/go`.
   ```
   ├── work
   │   ├── go
   │   │   ├── go-1.12.9
   │   │   │   ├── go (extracted from archive)
   │   │   ├── packages
   |   │   │   ├── bin
   |   │   │   ├── pkg
   |   │   │   └── src
   |   │   │       └── hello
   |   |   |           └── hello.go
   ```
1. Add env variables to the bottom of you `~/.bashrc`.
   ```
   export GOROOT=$HOME/work/go/go-1.12.9
   export GOPATH=$HOME/work/go/packages
   export PATH=$PATH:$GOPATH/bin:$GOROOT/bin
   ```
   Basically `GOROOT` is the path to go compiler and tools, `GOPATH` for go your future programs.
1. Don't forget to create `bin`, `pkg`, `src` directories!
1. Put your first project in src directory.
1. Validate your installation (don't forget to restart bash).

   ```
   $ go version
   go version go1.12.9 linux/amd64

   $ which go
   $HOME/work/go/go-1.12.9/bin/go
   ```

1. Go to `hello` directory and copy the following code inside `hello.go`.

   ```go
   package main

   import "fmt"

   func Hello() string {
       return "Hello, world"
   }

   func main() {
       fmt.Println(Hello())
   }
   ```

1. Run `go run hello.go` in terminal. Should work.
1. You are awesome!
