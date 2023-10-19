import { Component, OnInit } from '@angular/core'
import { ItemsService } from 'src/app/shared/Items.service'
import { TypeItem } from 'src/types/item.types'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: TypeItem[] = [] as TypeItem[]

  constructor(private itemsShared: ItemsService) {}

  ngOnInit() {
    const loadTasks = () => {
      const tasks = localStorage.getItem('items')
      if (tasks && JSON.parse(tasks)) {
        this.tasks = JSON.parse(tasks)
        this.itemsShared.setItems(this.tasks)
      }
    }

    this.itemsShared.items$.subscribe((tasks) => {
      this.tasks = tasks as TypeItem[]
    })

    loadTasks()
  }

  removeTask(taskId: string) {
    const taskIndex = this.tasks.findIndex((item) => item.id === taskId)

    this.tasks.splice(taskIndex, 1)

    localStorage.setItem('items', JSON.stringify(this.tasks))
  }
}
