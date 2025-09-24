const vocabQuestions = [
  { q: "'apple' nghĩa là gì?", answers: ["Quả táo", "Quả chuối", "Quả xoài"], correct: 0, explain: "'Apple' = quả táo." },
  { q: "'river' nghĩa là gì?", answers: ["Con sông", "Ngọn núi", "Cánh đồng"], correct: 0, explain: "'River' = con sông." },
  { q: "'beautiful' nghĩa là gì?", answers: ["Xấu xí", "Đẹp", "Giàu có"], correct: 1, explain: "'Beautiful' = đẹp." },
  { q: "'I am' nghĩa là gì?", answers: ["Tôi là", "Anh ấy là", "Chúng ta là"], correct: 0, explain: "'I am' = Tôi là." },
  { q: "'too handsome' nghĩa là gì?", answers: ["Quá đẹp trai", "Khá thông minh", "Rất nhanh"], correct: 0, explain: "'Too handsome' = Quá đẹp trai." },
  { q: "'I don't know' nghĩa là gì?", answers: ["Tôi không biết", "Tôi không muốn", "Tôi không thích"], correct: 0, explain: "'I don't know' = Tôi không biết." },
  { q: "'How are you?' nghĩa là gì?", answers: ["Bạn khỏe không?", "Bạn đi đâu?", "Bạn tên gì?"], correct: 0, explain: "'How are you?' = Bạn khỏe không?" },
  { q: "'Good morning' nghĩa là gì?", answers: ["Chào buổi sáng", "Chào buổi tối", "Chúc ngủ ngon"], correct: 0, explain: "'Good morning' = Chào buổi sáng." },
  { q: "'Good night' nghĩa là gì?", answers: ["Chúc ngủ ngon", "Chào tạm biệt", "Chúc may mắn"], correct: 0, explain: "'Good night' = Chúc ngủ ngon." },
  { q: "'See you later' nghĩa là gì?", answers: ["Hẹn gặp lại", "Tạm biệt mãi mãi", "Đi ngủ thôi"], correct: 0, explain: "'See you later' = Hẹn gặp lại." },

  { q: "'What's your name?' nghĩa là gì?", answers: ["Tên bạn là gì?", "Bạn bao nhiêu tuổi?", "Bạn sống ở đâu?"], correct: 0, explain: "'What's your name?' = Tên bạn là gì?" },
  { q: "'My name is…' nghĩa là gì?", answers: ["Tên tôi là…", "Tôi thích…", "Tôi đến từ…"], correct: 0, explain: "'My name is…' = Tên tôi là…" },
  { q: "'I am hungry' nghĩa là gì?", answers: ["Tôi đói", "Tôi khát", "Tôi buồn"], correct: 0, explain: "'I am hungry' = Tôi đói." },
  { q: "'I am tired' nghĩa là gì?", answers: ["Tôi mệt", "Tôi vui", "Tôi buồn"], correct: 0, explain: "'I am tired' = Tôi mệt." },
  { q: "'very good' nghĩa là gì?", answers: ["Rất tốt", "Bình thường", "Không tốt"], correct: 0, explain: "'Very good' = Rất tốt." },
  { q: "'right now' nghĩa là gì?", answers: ["Ngay bây giờ", "Ngày mai", "Một lúc nữa"], correct: 0, explain: "'Right now' = Ngay bây giờ." },
  { q: "'at home' nghĩa là gì?", answers: ["Ở nhà", "Đến trường", "Ra ngoài"], correct: 0, explain: "'At home' = Ở nhà." },
  { q: "'go to school' nghĩa là gì?", answers: ["Đi học", "Đi chơi", "Đi ngủ"], correct: 0, explain: "'Go to school' = Đi học." },
  { q: "'play football' nghĩa là gì?", answers: ["Chơi bóng đá", "Chơi đàn", "Chơi game"], correct: 0, explain: "'Play football' = Chơi bóng đá." },
  { q: "'listen to music' nghĩa là gì?", answers: ["Nghe nhạc", "Nghe điện thoại", "Nghe giảng"], correct: 0, explain: "'Listen to music' = Nghe nhạc." },

  { q: "'thank you' nghĩa là gì?", answers: ["Cảm ơn", "Xin lỗi", "Không sao"], correct: 0, explain: "'Thank you' = Cảm ơn." },
  { q: "'you're welcome' nghĩa là gì?", answers: ["Không có gì", "Chào tạm biệt", "Chúc ngủ ngon"], correct: 0, explain: "'You're welcome' = Không có gì." },
  { q: "'excuse me' nghĩa là gì?", answers: ["Xin lỗi", "Tạm biệt", "Chúc may mắn"], correct: 0, explain: "'Excuse me' = Xin lỗi, làm ơn." },
  { q: "'see you tomorrow' nghĩa là gì?", answers: ["Hẹn gặp bạn ngày mai", "Hẹn gặp lại sau", "Tạm biệt mãi mãi"], correct: 0, explain: "'See you tomorrow' = Hẹn gặp bạn ngày mai." },
  { q: "'good luck' nghĩa là gì?", answers: ["Chúc may mắn", "Chúc ngủ ngon", "Chào buổi sáng"], correct: 0, explain: "'Good luck' = Chúc may mắn." },
  { q: "'I am fine' nghĩa là gì?", answers: ["Tôi khỏe", "Tôi mệt", "Tôi buồn"], correct: 0, explain: "'I am fine' = Tôi khỏe." },
  { q: "'long time no see' nghĩa là gì?", answers: ["Lâu rồi không gặp", "Không bao giờ gặp lại", "Không muốn gặp"], correct: 0, explain: "'Long time no see' = Lâu rồi không gặp." },
  { q: "'what time is it?' nghĩa là gì?", answers: ["Bây giờ là mấy giờ?", "Bạn ở đâu?", "Bạn làm gì?"], correct: 0, explain: "'What time is it?' = Bây giờ là mấy giờ?" },
  { q: "'how old are you?' nghĩa là gì?", answers: ["Bạn bao nhiêu tuổi?", "Bạn tên gì?", "Bạn học lớp mấy?"], correct: 0, explain: "'How old are you?' = Bạn bao nhiêu tuổi?" },
  { q: "'I miss you' nghĩa là gì?", answers: ["Anh nhớ em", "Anh giận em", "Anh quên em rồi"], correct: 0, explain: "'I miss you' = Anh nhớ em." }
];

export default vocabQuestions;
