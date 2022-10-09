export function parseErrorsAPI(response: any): string[]{
    const result: string[] = []

    if(response.error){
        if(typeof response.error === 'string'){
            result.push(response.error)
        }else{
            const errorsMap = response.error.errors
            const entries = Object.entries(errorsMap)
            entries.forEach((listArray: any[]) => {
                const field = listArray[0]
                listArray[1].forEach((errorMessage: any) => {
                    result.push(`${field}: ${errorMessage}`)
                })
            })
        }
    }

    return result
}