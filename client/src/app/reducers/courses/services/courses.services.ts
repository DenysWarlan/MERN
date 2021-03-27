import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AddCoursesModel} from "../models/add-courses.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CoursesServices {
  constructor(private http: HttpClient) {}
  addCourses(data: AddCoursesModel): Observable<any> {
    const url = 'api/courses/add'
      return this.http.post(url, data);
  }
  getList(): Observable<any> {
    const url = 'api/courses/list'
      return this.http.get(url);
  }
}
