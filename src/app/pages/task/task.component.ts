import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TypeItem } from 'src/types/item.types'

@Component({
  selector: 'app-task-view',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskView implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  task = {} as TypeItem
  taskId = ''

  submit(event: SubmitEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    // ? Getting Values
    const nameInput = form.elements.namedItem('name') as HTMLInputElement
    const descInput = form.elements.namedItem('description') as HTMLInputElement
    const name = nameInput.value
    const description = descInput.value

    if (this.getItems()) {
      const items = this.getItems()
      const itemIndex = items.findIndex((item) => item.id === this.taskId)

      items[itemIndex] = {
        ...items[itemIndex],
        name,
        description,
      }

      localStorage.setItem('items', JSON.stringify(items))
      this.router.navigate(['/'])
    }
  }

  getItems() {
    return JSON.parse(localStorage.getItem('items') || '[]') as TypeItem[]
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const taskid = params.get('task')
      this.taskId = taskid || ''

      if (this.getItems().length > 0) {
        const task = this.getItems().find((item) => item.id === taskid)
        if (task) {
          this.task = task
        }
      }
    })
  }
}
