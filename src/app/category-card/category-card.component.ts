import { Component, Input } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input()
  currentCategory? : Category;
 }
 
