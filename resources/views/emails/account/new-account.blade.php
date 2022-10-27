@component('mail::message')
# {{__('email.confirmation_title')}}

{{__('email.confirmation_message')}}

@component('mail::button', ['url' => route('email_confirmation',['token'=>$user->email_token])])
 {{__('email.confirmation_button')}}
@endcomponent

{{__('email.confirmation_thanks')}},<br>
{{ config('app.name') }}
@endcomponent
