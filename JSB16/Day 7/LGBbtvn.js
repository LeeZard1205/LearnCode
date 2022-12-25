// 1.
let h = Number(prompt("Nhập chiều cao tam giác cân h: "))
let x = 1
let s = ""
while (h>0) {
    s = "";
    for (let i = 1; i < h; i++) {
        s = s + " ";
        
    };
    for (let k = 1; k <=x; k++) {
        s = s + "1";
        
    };
    console.log(s);
    h--;
    x+=2;

}

// 2.
let myArr = [9,7,9,0,7,8,387,123,456]
let evenNum = []

for (let a of myArr) {
    let b = a % 2;
    if (b==0) {
        evenNum.push(a);
        
    };
}
console.log(evenNum);
for (let i = 0; i < evenNum.length; i++) {
    console.log(evenNum[i]);
    
}

// 3.
let myAnswer = []
alert("Please answer the following questions with Yes or No!")
let q1 = prompt("Do you know English (Yes/No) ?")
let q2 = ""
let q3 = ""
let q4 = ""
let q5 = ""
if (q1 == "Yes") {
    q2 = prompt("Can I ask you some questions?");
    if (q2 == "Yes") {
        q3 = prompt("Even if it's personal information?");
        if (q3 == "Yes") {
            q4 = prompt("Have you finished primary school yet?");
            if (q4 == "Yes") {
                q5 = prompt("Great. Now, fill in the blank: ___,I'm gay.");
                if (q5 == "Yes") {
                    alert("Ha, Gay!");
                } else if (q5 == "No") {
                    alert("Ha, Gay!");
                }
            } else if (q4 == "No") {
                q5 = prompt("Do you like Free Fire?");
                if (q5 == "Yes") {
                    alert("Oh sh*t Lửa Chùa!");
                } else if (q5 == "No") {
                    alert("Great. Then don't play it");
                }
            }
        } else if (q3 == "No") {
            q4 = prompt("Ok but it's just a simple question, do you want to continue?");
            if (q4 == "Yes") {
                q5 = prompt("Great. Now, fill in the blank: ___,I'm gay.");
                if (q5 == "Yes") {
                    alert("Ha, Gay!");
                } else if (q5 == "No") {
                    alert("Ha, Gay!");
                }
            } else if (q4 == "No") {
                q5 = prompt("So you want to stop here?");
                if (q5 == "Yes") {
                    alert("Thanks for answering");
                } else if (q5 == "No") {
                    alert("But i want. Bye");
                }
            }
        }
    } else if (q2 == "No") {
        q3 = prompt("Don't worry, it's just a simple question. Do you want to continue?");
        if (q3 == "Yes") {
            q4 = prompt("Have you finished primary school yet?");
            if (q4 == "Yes") {
                q5 = prompt("Great. Now, fill in the blank: ___,I'm gay.");
                if (q5 == "Yes") {
                    alert("Ha, Gay!");
                } else if (q5 == "No") {
                    alert("Ha, Gay!");
                }
            } else if (q4 == "No") {
                q5 = prompt("Do you like Free Fire?");
                if (q5 == "Yes") {
                    alert("Oh sh*t Lửa Chùa!");
                } else if (q5 == "No") {
                    alert("Then don't play it");
                }
            }
        } else if (q3 == "No") {
            q4 = prompt("So you want to stop here?");
            if (q4 == "Yes") {
                q5 = prompt("Did i waste your time?");
                if (q5 == "Yes") {
                    alert("Sorry, my bad.");
                } else if (q5 == "No") {
                    alert("Thanks for answering");
                }
            } else if (q4 == "No") {
                q5 = prompt("TF bro, you gay?");
                if (q5 == "Yes") {
                    alert("Ha, Gay!");
                } else if (q5 == "No") {
                    alert("I bet that you gay!");
                }
            }
        }
    }

} else if (q1 == "No") {
    q2 = prompt("Do you know that Yes mean Có and No mean Không?");
    if (q2 == "Yes") {
        q3 = prompt("Did you just use the dictionary?");
        if (q3 == "Yes") {
            q4 = prompt("Do you want to know about other ways to understand English?");
            if (q4 == "Yes") {
                q5 = prompt("Do you know Google translatation?");
                if (q5 == "Yes") {
                    alert("Good. So why don't you use it you idiot");
                } else if (q5 == "No") {
                    alert("Where the hell in the world do you come from? Go search for it you idiot");
                }
            } else if (q4 == "No") {
                q5 = prompt("So do you know why you don't know English huh?");
                if (q5 == "Yes") {
                    alert("YES, it's because you don't want to learn form other people you idiot!");
                } else if (q5 == "No") {
                    alert("It's because you don't want to learn form other people you idiot!");
                }
            }
        } else if (q3 == "No") {
            q4 = prompt("Are you lying?");
            if (q4 == "Yes") {
                q5 = prompt("You think I'm an idiot?");
                if (q5 == "Yes") {
                    alert("No u");
                } else if (q5 == "No") {
                    alert("So you must have some problems with your brain.");
                }
            } else if (q4 == "No") {
                q5 = prompt("So this's what you mean don't know English?");
                if (q5 == "Yes") {
                    alert("Go start again please you liar");
                } else if (q5 == "No") {
                    alert("Wow, you must have some problems with your brain.");
                }
            }
        }
    } else if (q2 == "No") {
        q3 = prompt("Bây giờ bạn biết rằng Yes nghĩa là Có và No nghĩa là Không chưa?");
        if (q3 == "Yes") {
            q4 = prompt("Tốt. Tôi có thể hỏi bạn và bạn sẽ trả lời bằng Yes/No được chứ?");
            if (q4 == "Yes") {
                q5 = prompt("Bạn còn câu hỏi nào không?");
                if (q5 == "Yes") {
                    alert("Vậy hãy dùng google dịch để giúp mình hiểu tiếng anh  và bắt đàu lại.");
                } else if (q5 == "No") {
                    alert("Vậy tạm biệt. Cảm ơn vì đã trả lời");
                }
            } else if (q4 == "No") {
                q5 = prompt("Vậy là bạn còn thắc mắc đúng chứ?");
                if (q5 == "Yes") {
                    alert("Vậy hãy dùng google dịch để giúp mình hiểu tiếng anh  và bắt đàu lại.");
                } else if (q5 == "No") {
                    alert("Vậy tạm biệt. Cảm ơn vì đã trả lời");
                }
            }
        } else if (q3 == "No") {
            q4 = prompt("Bạn học qua lớp 1 chứ?");
            if (q4 == "Yes") {
                q5 = prompt("Đầu óc bạn bình thường chứ?");
                if (q5 == "Yes") {
                    alert("Đ*o, không ai đầu óc bình thường lại phí thời gian trả lời mấy cái này cả");
                } else if (q5 == "No") {
                    alert("Tốt. Có mốt nơi gọi là bệnh viện đến đó thử xem.");
                }
            } else if (q4 == "No") {
                q5 = prompt("Bạn chơi faifai hay xem toptop quá 180p 1 ngày chứ?");
                if (q5 == "Yes") {
                    alert("Quả nhiên. Đi học đi nhóc");
                } else if (q5 == "No") {
                    alert("Tốt. Đi học đi nhóc");
                }
            }
        }
    }
}
myAnswer.push(q1)
myAnswer.push(q2)
myAnswer.push(q3)
myAnswer.push(q4)
myAnswer.push(q5)
console.log(myAnswer)

// xuất ra các số chia hết cho 2 hoặc 3 trong khoảng 1-20
for (let a = 2; a < 20; a++) {
    let b2 = a%2;
    let b3 = a%3;
    if (b2==0 || b3==0) {
        console.log(a);
    }
    
}

