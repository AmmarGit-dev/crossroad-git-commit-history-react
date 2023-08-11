import { Octokit } from "octokit"

export const getCommits = async() => {
    const octokit = new Octokit({
        auth: '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'
    })

    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: 'mabdullahdev',
        repo: 'menuof'
    })

    console.log(response.data);
    
    const commitsData = response.data.map(commitData => ({
        'sha': commitData.sha,
        'authorName': commitData.commit.author.name,
        'message': commitData.commit.message,
        'date': new Date(commitData.commit.author.date).toLocaleString()
    }))
    
    return commitsData;
}