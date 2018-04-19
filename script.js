/* exported Script */
/* globals console, _, s */

class Script {
    /**
     * @params {object} request
     */
    process_incoming_request({ request }) {
        if (request.content.hasOwnProperty('marker')) {
            const msg = request.content.marker;

            return {
                content: {
                    text: `[New deployment](${msg.url}) for ${msg.site} (${msg.environment})`,
                    attachments: [{
                        color: "#2ecc71",
                        fields: [
                            {
                                title: "Revision",
                                value: msg.revision
                            },
                            {
                                title: "User",
                                value: msg.user
                            }
                        ]
                    }]
                }
            };
        }

        if (request.content.hasOwnProperty('exception')) {
            const msg = request.content.exception;

            return {
                content: {
                    text: `[${msg.exception}](${msg.url}) occurred on ${msg.site} (${msg.environment})`,
                    attachments: [{
                        color: "#e74c3c",
                        fields: [
                            {
                                title: "Message",
                                value: msg.message,
                            },
                            {
                                title: "Action",
                                value: msg.action,
                            },
                            {
                                title: "Path",
                                value: msg.path,
                            },
                            {
                                title: "Backtrace",
                                value: msg.first_backtrace_line,
                                short: false,
                            }
                        ]
                    }]
                }
            };
        }

        if (request.content.hasOwnProperty('performance')) {
            const msg = request.content.performance;

            return {
                content: {
                    text: `[Performance issue](${msg.url}) occurred on ${msg.site} (${msg.environment})`,
                    attachments: [{
                        color: "#e67e22",
                        fields: [
                            {
                                title: "Action",
                                value: msg.action,
                            },
                            {
                                title: "Path",
                                value: msg.path,
                            },
                            {
                                title: "Duration",
                                value: `${(msg.duration / 1000).toFixed(3)}s`,
                            },
                            {
                                title: "Status",
                                value: msg.status,
                            },
                        ]
                    }]
                }
            };
        }

        if (request.content.hasOwnProperty('test')) {
            return {
                content: {
                    text: 'Testing from AppSignal, looks like it works!',
                    attachments: [{
                        color: "#2ecc71",
                        title: "AppSignal",
                        title_link: "https://appsignal.com/",
                        text: "Track errors, performance, hosts & custom metrics."
                    }]
                }
            };
        }

        return {
            error: {
                success: false,
                message: 'Unknown message from AppSignal'
            }
        };
    }
}
