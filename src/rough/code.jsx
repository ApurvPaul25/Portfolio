
import { useEffect, useState } from "react";
import Loading from "../components/loading/loading";

const GIT_PAT = import.meta.env.VITE_GIT_PAT;

const getContributionColor = (count) => {
  if (count === 0) return "#454357";
  if (count <= 2) return "#344B40";
  if (count <= 5) return "#588264";
  return "#A3C4A2";
};

export default function Code(){
    const [calendarDays, setCalendarDays] = useState([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);

    async function fetchGitCal(GIT_PAT) {
        if(!GIT_PAT){
            console.error("Missing GitHub Token")
            return
        }

        const query = `
            query {
                viewer {
                contributionsCollection {
                    contributionCalendar {
                    totalContributions
                    weeks {
                        contributionDays {
                        date
                        contributionCount
                        color
                        weekday
                        }
                    }
                    }
                }
                }
            }
        `
        try {
            const response = await fetch("https://api.github.com/graphql",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GIT_PAT}`
            },
            body: JSON.stringify({query})
        })

        const result = await response.json()

        if(!response.ok){
            console.error("GitHub API Error: ", result)
            return
        }

        if(result.errors){
            console.error("GraphQL Errors: ", result.errors)
            return
        }

        const calendar = result.data.viewer.contributionsCollection.contributionCalendar
        const allDays = calendar.weeks.flatMap(week => week.contributionDays)

        setTotalContributions(calendar.totalContributions)
        setCalendarDays(allDays)

        } catch (error) {
            console.error("Fetch Error: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGitCal(GIT_PAT)
    },[])

    if(loading) return <div>Loading Calendar...</div>

    return(
        <div className="git-contributions">
            <h3 className="git-contributions-title">My GitHub Contributions ({totalContributions} in the last year)</h3>
            
            <div className="git-contributions-calendar">
            {calendarDays.map((day) => (
                <div
                key={day.date}
                className="contribution-day"
                title={`${day.contributionCount} contributions on ${day.date}`}
                style={{ backgroundColor: getContributionColor(day.contributionCount) }}
                />
            ))}
            </div>
        </div>
    )
}