/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indegree = new Array(numCourses).fill(0);

    for (let prerequisite of prerequisites) {
        let [course, prerequisiteCourse] = prerequisite;
        indegree[course]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let index = 0;
    while (queue.length > 0) {
        let currentCourse = queue.shift();
        numCourses--;

        for (let prerequisite of prerequisites) {
            if (prerequisite[1] === currentCourse) {
                indegree[prerequisite[0]]--;

                if (indegree[prerequisite[0]] === 0) {
                    queue.push(prerequisite[0]);
                }
            }
        }
    }

    return numCourses === 0;
};
