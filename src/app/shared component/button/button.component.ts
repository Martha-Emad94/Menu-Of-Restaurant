import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  ngOnInit(): void {
    // الحصول على الزر
    const backToTopBtn = document.getElementById("myBtn") as HTMLElement;

    // عرض الزر عند التمرير لأسفل 100 بكسل
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    // العودة إلى الأعلى عند النقر
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // التمرير بسلاسة
      });
    });
  }
}
