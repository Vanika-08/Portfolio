$(document).ready(function(){
    $("#abcd"). click( function(){
        alert('Thank for your response!');
    });
});
function downloadResume() {
    // Replace the URL below with the actual URL of your resume file
    const resumeURL = 'RESUME_VANIKA 1-2.pdf (3) (1).pdf';

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'RESUME_VANIKA 1-2.pdf (3) (1).pdf';

    // Append the anchor to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the body after the download starts
    document.body.removeChild(link);
}
