
type componentProps = {
    category?: string
    difficulty?: string
    type?: string
}

const BaseURL = `https://opentdb.com/api.php?amount=1`

export async function ApiFetch(props: componentProps) {
    try {

        const response = await fetch(`${BaseURL}&category=${props.category || '18'}&difficulty=${props.difficulty || 'medium'}&type=${props.type || 'multiple'}`)
        const result = await response.json()

        const data = result.results[0]
        const getOptions = [
            ...(data.incorrect_answers ?? []),
            data.correct_answer
        ]

        const options = shuffleArray(getOptions)


        return {
            ...data,
            options
        }
    } catch (error) {
        Alert((error as Error).message, "error")
    }
}

function shuffleArray(array: string[]) {
    const arr = [...array]; // copy to avoid mutating original
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
    return arr;
}

type toastProps = 'success' | 'error' | 'default' | 'info' | 'warning'

export async function Alert(message: string, type: toastProps) {
    const { toast } = await import("react-toastify");
    toast(message, { type });
}

export const locals = "QUIZ"