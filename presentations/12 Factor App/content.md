class: center, middle


<h4 style="color:skyblue;">Software Engineering Patterns</h4>
# 12 Factor App

### Arian Akbari

<br/>

Quera

January 2020



---

layout: true
## Introduction
<!--------------------------------------------------------------------------------------------------------------------->

---

#### What is 12 Factor App?

- Methodology for building **software-as-a-service** in the **Cloud**




---

#### Why is it important? 

- **Declarative** formats for setup automation

- **Minimize divergence** between prod/dev

- **Maximum** portability between execution environments

- **Deployment** on modern cloud platforms

- Enables **continuous deployment**

- **Scale up** easily

---

#### History
 - Manifesto written around **2012**
 - by **Adam Wiggins**
   - **Heroku** (Early cloud PaaS)
    
 - <a href="http://12factor.net" style="color:skyblue;text-decoration:none">12 Factor Website</a>

---
#### For Who?
- **Any developer** building applications which run as a **service**
- Ops engineers who deploy or manage such applications

---
layout: true

---
class: center,middle

# And Docker!

---
class: center,middle

## If you use docker in production you probably **already** have a 12 factor app!

---

<center>
<img src="./images/docker.png" alt="Docker" style="width:600px;height:600px;background:white" />
</center>
---
class: center,middle

# ...AAS Models

<h3 style="color:skyblue">... As a Service Models</h3>

---

layout: true

## AAS Models

---

<img src="./images/aas.png" alt="AAS Models" style="width:100%;height:100%" />

---
layout: true

---
class:center,middle

# The Factors!

---

layout: true

## The Factors

---
1.Codebase
  - One Codebase Many Deploys

2.Dependencies
  - Explicitly Declare and Isolate

3.Config
  -  Store in The Environment
  
4.Backing Services
  - As Attached Resources
  
5.Build Release Run
  - Strictly Separate Build & Run Stages
  

---

6.Processes
  - Execute The App As One or More Stateless Processes

7.Port Binding
  - Export Services Via Port Binding
  
8.Concurrency
  - Scale Out Via The Process Model

9.Disposability
  - Maximise Robustness With Fast Startup And Graceful Shutdown
  
10.Dev Prod Parity 
  - Keep Development,Staging And Production As Similar As Possible


---

11.Logs
  - Treat Logs As Event Streams
  
12.Admin Processes
  - Run Management Tasks As One-Off Processes


---


layout: false
## References
<!--------------------------------------------------------------------------------------------------------------------->

https://docs.python.org/3/whatsnew/3.6.html

https://docs.python.org/3/whatsnew/3.7.html

https://docs.python.org/3/whatsnew/3.8.html

## Report Issues

If you found an issue or have a suggestion, feel free to contact us.

<a class="github-button" href="https://github.com/QueraTeam/presentations/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue QueraTeam/presentations on GitHub">Report Issues</a>