from django.shortcuts import render
import openai


def openai_view(request):
    if request.method == 'POST':
        user_input = request.POST['user_input']
        openai.api_key = "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"
        completions = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"{user_input}",
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.5,
        )
        message = completions.choices[0].text
        question = user_input
        return render(request, 'lessons/openai_response.html', {'message': message, 'question': question})
    return render(request, 'lessons/openai_form.html')


