def preprocessing():
    original = open("naval ravikant/transcript_1.txt",'r')
    revised = open("naval ravikant/revised_transcript_1.txt","w")
    lines = original.readlines()

    while "\n" in lines:
        lines.remove("\n")

    processed_lines = []

    for j in range(len(lines)):
        lines[j] = lines[j].strip()
        if lines[j][:16] == "Naval Ravikant: ":
            processed_lines.append(lines[j][16:])
        elif lines[j][:13] == "Tim Ferriss: ":
            processed_lines.append(lines[j][13:])
        else:    
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