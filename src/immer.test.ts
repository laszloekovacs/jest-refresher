import produce from 'immer'

it("returns an updated copy of the input", () => {
    
    type task = {
        title: string,
        done: boolean
    }


    const baseState: task[] = [
        {
            title: "Learn TypeScript",
            done: false
        },
        {
            title: "Try Immer",
            done: false
        }
    ]
    
    const result = produce(baseState, (draft: task[]) => {
        draft[1].done = true
        draft.push({ title: "Tweet about it", done: false})
    })

    expect(result).toBeInstanceOf(Array)
    expect(result).toContainEqual({title: "Tweet about it", done: false})
    expect(result).toHaveLength(3)
})