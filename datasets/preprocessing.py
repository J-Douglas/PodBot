def preprocessing():
    original = open("naval ravikant/transcript_3.txt",'r')
    revised = open("naval ravikant/revised_transcript_3.txt","w")
    lines = original.readlines()

    while "\n" in lines:
        lines.remove("\n")

    processed_lines = []

    for j in range(len(lines)):
        lines[j] = lines[j].strip()
        if j is not 0:
            if lines[j-1][0:1] is "[":
                processed_lines.append(lines[j])
            else:
                if lines[j][0:1] is not "[":
                    processed_lines[-1] = processed_lines[-1] + " " + lines[j]
        

    i = 0
    start_episode = True

    while i < len(processed_lines):
        if i+1 != len(processed_lines): 
            if not start_episode:
                revised.write("('" + processed_lines[i] + "','" + processed_lines[i+1] + "'), False" + '\n')
            else:
                revised.write("('" + processed_lines[i] + "','" + processed_lines[i+1] + "'), True" + '\n')
                start_episode = False
        i += 2

    revised.close()

preprocessing()