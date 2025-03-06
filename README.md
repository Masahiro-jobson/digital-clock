
This application shows the current time based on local time.</br>
It makes me deeply understand how usestate and useEffect work.
</br>
First, I made useState which makes new Date object for "time" state and the update state which is setTime.</br>
<img width="283" alt="image" src="https://github.com/user-attachments/assets/93477678-e1c4-496a-b8cf-c9b5a39fe4da" />
</br>

Second, I made useEffect state and it includes timerId variable which stores setInterval (Java) function. </br> The setInterval function enables the time to be updated per 1000 milliseconds. </br> For better performance, I set clearInterval function for deleting setInterval function in timerId after updating the current time.</br>
<img width="351" alt="image" src="https://github.com/user-attachments/assets/eb9d7e7a-04ef-4e42-8743-4f09512343be" />
</br>

Thirdly, I made formattedTime variable which stores method to convert time object to String to show the display (time.toLocaleTimeString). <br/> It has a format such as hour, minute, and second in the curly bracket.<br/> 
<img width="338" alt="image" src="https://github.com/user-attachments/assets/1d9fed1e-e928-462e-b965-d2c71db7c1e3" />
</br>

Finally, in return statement (which shows to user), I refered to formattedTime variable with curly bracket.</br> {time.toLocaleTimeString()} works instead of the variable; however, to show the formatted time, I refered to formattedTime variable.</br>
<img width="237" alt="image" src="https://github.com/user-attachments/assets/dc997b73-d532-41a1-b21f-2fb52c0753b3" />
</br>

Application Look</br>
<img width="517" alt="image" src="https://github.com/user-attachments/assets/212db535-3767-48fc-8039-88f309cc0bfb" />


